module.exports = {
  apps: [{
    name: "odzi-cloud-api",
    script: "./dist/main.js",
    env: {
      MODE: "PRODUCTION",
    },
  }]
}