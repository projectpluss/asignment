// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                blog: resolve(__dirname, 'blog.html'),
                works_detail: resolve(__dirname, 'works_detail.html'),
                works: resolve(__dirname, 'works.html')
            }
        }
    }
})