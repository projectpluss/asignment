// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                product: resolve(__dirname, 'product.html'),
                detail: resolve(__dirname, 'detail.html'),
                signin: resolve(__dirname, 'signin.html'),
                signup: resolve(__dirname, 'signup.html'),
            }
        }
    }
})