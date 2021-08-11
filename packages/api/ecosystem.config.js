module.exports = {
  apps: [{
    name: "odzi-api",
    script: "./dist/main.js",
    env: {
      MODE: "PRODUCTION",

      MAIL_HOST: "smtp.mailazy.com",
      MAIL_PORT: 587,

      MAIL_AUTH_USER: "c43a8b2k4fl9srqq73a0",
      MAIL_AUTH_PASS: "JWefIfRuvtzGjhTFntpYpWJMUNujxW.7jk3xvfavvBFh5CVETpcSP",
    },
  }]
}