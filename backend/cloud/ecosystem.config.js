module.exports = {
  apps: [{
    name: "ctrlpaint-api",
    script: "./dist/main.js",
    env: {
      MODE: "PRODUCTION",
    },
  }]
}