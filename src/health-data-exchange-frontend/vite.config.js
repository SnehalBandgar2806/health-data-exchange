/// <reference types="vitest" />
import { fileURLToPath, URL } from 'url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import environment from 'vite-plugin-environment';
import dotenv from 'dotenv';

// Load environment variables from .env located two levels up
dotenv.config({ path: '../../.env' });

export default defineConfig({
  build: {
    emptyOutDir: true,
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:4943",
        changeOrigin: true,
      },
    },
  },
  plugins: [
    react(),

    // ✅ Explicitly pass CANISTER_* env vars to avoid "undefined" error
    environment({
      CANISTER_HEALTH_DATA_EXCHANGE_FRONTEND: process.env.CANISTER_ID_HEALTH_DATA_EXCHANGE_FRONTEND || '',
      CANISTER_HEALTH_DATA_EXCHANGE_BACKEND: process.env.CANISTER_ID_HEALTH_DATA_EXCHANGE_BACKEND || '',
      CANISTER_INTERNET_IDENTITY: process.env.CANISTER_ID_INTERNET_IDENTITY || '',
      DFX_NETWORK: process.env.DFX_NETWORK || 'local',
    }),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: 'src/setupTests.js',
  },
  resolve: {
    alias: [
      {
        find: "declarations",
        replacement: fileURLToPath(
          new URL("../declarations", import.meta.url)
        ),
      },
    ],
    dedupe: ['@dfinity/agent'],
  },
});
