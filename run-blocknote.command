#!/bin/bash
# Pindah ke direktori tempat file .command ini berada
cd "$(dirname "$0")" || exit

echo "==============================================="
echo "        STARTING BLOCKNOTE REFERENCE           "
echo "==============================================="
echo "Masuk ke folder blocknote..."
cd blocknote || exit

# Cek apakah node_modules sudah ada, jika belum jalankan instalasi
if [ ! -d "node_modules" ]; then
    echo "Dependensi belum diinstal. Menginstal via pnpm..."
    npx pnpm install
fi

echo "Menjalankan BlockNote Dev Server..."
npx pnpm dev
