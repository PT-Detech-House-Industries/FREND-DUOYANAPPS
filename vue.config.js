const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // proxy: 'http://dev.nihonuwu.com', // Ganti dengan URL server Node.js Anda
    proxy: {
      "/route": {
        target: "http://dev.nihonuwu.com",
      }
    }
  },
})
