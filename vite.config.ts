import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import plainText from 'vite-plugin-plain-text';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), plainText([/\.txt$/]),],
    base: '/camera-menu/'
})
