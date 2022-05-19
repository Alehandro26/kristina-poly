import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import packageConfig from "./package.json";

 

// https://vitejs.dev/config/
export default defineConfig(({mode}) => ({

  base: mode === "production" ? packageConfig.homepage : "",
  plugins: [react()]
}))

