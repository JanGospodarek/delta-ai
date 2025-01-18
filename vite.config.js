import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: 'extension/index.js',
      output: {
        format: 'iife', // Immediately Invoked Function Expression for compatibility
        entryFileNames: 'background.js',
      },
    },
    outDir: 'out/background', // Where the bundled file will be generated
  },
});
