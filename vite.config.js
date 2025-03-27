console.log('vite config is running...');

import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  console.log('vite mode:', mode);

  const envDir = path.resolve(__dirname, '..');
  console.log('Env dir:', envDir);

  const env = loadEnv(mode, envDir);
  console.log("Loaded ENV:", env);

  return {
    envDir,
    plugins: [
      vue(),
      vueDevTools(),
    ],
    resolve: {
      alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    define: {
      'import.meta.env.DB_HOST': JSON.stringify(env.DB_HOST),
      'import.meta.env.DB_TOKEN': JSON.stringify(env.DB_TOKEN),
    },
  };
});
