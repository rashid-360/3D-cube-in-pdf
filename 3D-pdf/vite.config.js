import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ghPages from 'vite-plugin-gh-pages';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()


    ,    tailwindcss(),ghPages()
  ],
  
  base: '/3D-cube-in-pdf/',
})
