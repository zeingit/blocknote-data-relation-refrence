import React, { useState, useRef, useEffect } from 'react';
import { Handle, Position, useReactFlow } from '@xyflow/react';
import { Trash2 } from 'lucide-react';

export default function CustomNode({ id, data, selected, isConnectable }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(data.label || '');
  const inputRef = useRef(null);
  const { setNodes, setEdges } = useReactFlow();

  // Sync internal title state with external data changes
  useEffect(() => {
    setTitle(data.label || '');
  }, [data.label]);

  // Focus input automatically when editing mode is triggered
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    updateNodeLabel(title);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
      updateNodeLabel(title);
    }
  };

  const updateNodeLabel = (newLabel) => {
    setNodes((nds) =>
      nds.map((n) => {
        if (n.id === id) {
          return { ...n, data: { ...n.data, label: newLabel } };
        }
        return n;
      })
    );
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    // Remove the node itself
    setNodes((nds) => nds.filter((n) => n.id !== id));
    // Remove any edges connected to this node
    setEdges((eds) => eds.filter((edge) => edge.source !== id && edge.target !== id));
  };

  return (
    <div 
      className={`bg-white border-2 rounded-md p-3 min-w-[150px] text-center relative group transition-colors shadow-sm ${
        selected ? 'border-blue-500' : 'border-gray-300'
      }`}
      onDoubleClick={handleDoubleClick}
    >
      <Handle type="target" position={Position.Top} id="target" isConnectable={true} />
      
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="w-full text-center border-b border-blue-400 focus:outline-none bg-transparent"
        />
      ) : (
        <div className="text-sm font-medium text-gray-800 break-words pointer-events-none select-none cursor-pointer">
          {data.label || 'New Node'}
        </div>
      )}

      {/* Delete Button (visible on hover or select) */}
      <button
        onClick={handleDelete}
        className={`absolute -top-3 -right-3 bg-white border border-red-200 text-red-500 p-1.5 rounded-full hover:bg-red-50 hover:border-red-300 transition-opacity shadow-sm ${
          selected || isEditing ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
        title="Delete Node"
      >
        <Trash2 size={14} />
      </button>

      <Handle type="source" position={Position.Bottom} id="source" isConnectable={true} />
    </div>
  );
}
