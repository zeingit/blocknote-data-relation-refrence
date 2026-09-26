import React, { useState, useCallback, useEffect, useRef } from 'react';
import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  Controls,
  addEdge,
  useNodesState,
  useEdgesState,
  useReactFlow,
  MarkerType
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { X, Plus } from 'lucide-react';
import CustomNode from './CustomNode';

const nodeTypes = {
  custom: CustomNode,
};

const STORAGE_KEY = 'mindmap-canvas-data';

const defaultNodes = [
  {
    id: '1',
    type: 'custom',
    data: { label: 'Start Concept', notes: '' },
    position: { x: 250, y: 150 },
  },
];
const defaultEdges = [];

function FlowContent() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { getViewport } = useReactFlow();

  // Load from local storage on mount
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setNodes(parsed.nodes || defaultNodes);
        setEdges(parsed.edges || defaultEdges);
      } catch (e) {
        console.error("Failed to parse local storage data", e);
        setNodes(defaultNodes);
        setEdges(defaultEdges);
      }
    } else {
      setNodes(defaultNodes);
      setEdges(defaultEdges);
    }
    setIsLoaded(true);
  }, [setNodes, setEdges]);

  // Save to local storage on change
  useEffect(() => {
    if (!isLoaded) return;
    const dataToSave = { nodes, edges };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
  }, [nodes, edges, isLoaded]);

  // Handle new connections
  const onConnect = useCallback(
    (params) => {
      const edge = {
        ...params,
        type: 'smoothstep',
        markerEnd: { type: MarkerType.ArrowClosed },
      };
      setEdges((eds) => addEdge(edge, eds));
    },
    [setEdges]
  );

  const onNodeClick = useCallback((event, node) => {
    setSelectedNodeId(node.id);
  }, []);

  const onPaneClick = useCallback(() => {
    setSelectedNodeId(null);
  }, []);

  // Add a new node in the center of the current viewport
  const handleAddNode = useCallback(() => {
    const { x, y, zoom } = getViewport();
    
    // Calculate center of the screen in flow coordinates
    const centerX = -x / zoom + window.innerWidth / (2 * zoom);
    const centerY = -y / zoom + window.innerHeight / (2 * zoom);
    
    // Add random offset so multiple nodes don't stack exactly on top of each other
    const offsetX = (Math.random() - 0.5) * 50;
    const offsetY = (Math.random() - 0.5) * 50;

    const newNode = {
      id: Date.now().toString(),
      type: 'custom',
      position: { x: centerX + offsetX - 75, y: centerY + offsetY - 25 },
      data: { label: 'New Node', notes: '' },
    };

    setNodes((nds) => [...nds, newNode]);
    
    // Optionally select the newly created node
    setSelectedNodeId(newNode.id);
  }, [getViewport, setNodes]);

  const selectedNode = nodes.find((n) => n.id === selectedNodeId);

  // Close the panel if the currently selected node is deleted
  useEffect(() => {
    if (selectedNodeId && !selectedNode) {
      setSelectedNodeId(null);
    }
  }, [selectedNodeId, selectedNode]);

  // Notes state & debouncing logic
  const [localNotes, setLocalNotes] = useState('');
  const notesTimeoutRef = useRef(null);

  // Sync localNotes only when selectedNodeId changes to prevent cursor jumping
  useEffect(() => {
    if (selectedNode) {
      setLocalNotes(selectedNode.data.notes || '');
    } else {
      setLocalNotes('');
    }
  }, [selectedNodeId]);

  const handleNotesChange = (e) => {
    const newNotes = e.target.value;
    setLocalNotes(newNotes);

    if (notesTimeoutRef.current) {
      clearTimeout(notesTimeoutRef.current);
    }

    // Update the node data in state after 400ms of inactivity
    notesTimeoutRef.current = setTimeout(() => {
      setNodes((nds) => 
        nds.map((n) => {
          if (n.id === selectedNodeId) {
            return { ...n, data: { ...n.data, notes: newNotes } };
          }
          return n;
        })
      );
    }, 400);
  };

  if (!isLoaded) return null; // Avoid rendering until localStorage is read

  return (
    <div className="flex h-screen w-full bg-white overflow-hidden relative">
      {/* Canvas Area */}
      <div 
        className={`transition-all duration-300 ease-in-out h-full relative ${
          selectedNodeId ? 'w-[75%]' : 'w-full'
        }`}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={onNodeClick}
          onPaneClick={onPaneClick}
          nodeTypes={nodeTypes}
          defaultEdgeOptions={{ 
            type: 'smoothstep', 
            markerEnd: { type: MarkerType.ArrowClosed } 
          }}
          deleteKeyCode={['Backspace', 'Delete']}
          fitView={nodes.length === 1 && nodes[0].id === '1'}
        >
          <Background color="#ccc" gap={16} />
          <Controls />
        </ReactFlow>

        {/* Floating Action Button for adding nodes */}
        <button
          onClick={handleAddNode}
          className="absolute bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 transition-transform hover:scale-105 z-10"
        >
          <Plus size={20} />
          <span className="font-medium">Add Node</span>
        </button>
      </div>

      {/* Right Panel */}
      <div
        className={`transition-all duration-300 ease-in-out bg-gray-50 border-l border-gray-200 flex flex-col h-full shadow-inner ${
          selectedNodeId ? 'w-[25%]' : 'w-0'
        }`}
      >
        <div className="w-[25vw] h-full flex flex-col min-w-0">
          <div className="p-5 border-b border-gray-200 flex items-center justify-between bg-white">
            <h2 className="text-lg font-semibold text-gray-800 truncate pr-4" title={selectedNode?.data?.label}>
              {selectedNode ? selectedNode.data.label : 'Notes'}
            </h2>
            <button 
              onClick={() => setSelectedNodeId(null)}
              className="p-1.5 hover:bg-gray-100 rounded-md transition-colors text-gray-500 hover:text-gray-800 flex-shrink-0"
              aria-label="Close panel"
            >
              <X size={18} />
            </button>
          </div>
          
          <div className="p-4 flex-1 bg-gray-50 flex flex-col">
            {selectedNode && (
              <textarea
                value={localNotes}
                onChange={handleNotesChange}
                placeholder="Write your notes here... (Auto-saved)"
                className="flex-1 w-full bg-white p-4 rounded-xl shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-700 leading-relaxed transition-shadow"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ReactFlowProvider>
      <FlowContent />
    </ReactFlowProvider>
  );
}
