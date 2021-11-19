const path = require('path')
import vue from '@vitejs/plugin-vue'

const isLibMode = process.argv.includes("--mode=lib");

module.exports = {
    build: {
        ...(isLibMode ? {
            lib: {
                entry: path.resolve(__dirname, 'lib/index.js'),
                name: 'vue-displacement-slideshow',
                formats: ['es', 'umd'],
                fileName: format => `vue-displacement-slideshow.${format}.js`
            }
        } : {}),
        rollupOptions: {
            ...(!isLibMode ? {
                input: {
                    app: path.resolve(__dirname, 'index.html')
                }
            } : {}),
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        },
        outDir: isLibMode ? "dist/lib" : "dist/app"
    },
    plugins: [vue()]
}
