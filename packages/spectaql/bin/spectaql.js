#!/usr/bin/env node

const spectaql = require('../app')

const options = {
  logoFile: './static/anvil.png',
  faviconFile: './static/anvil.png',
  specData: {
    introspection: {
      url: 'https://api.pawcapsu.ml/graphql',
    },
    info: {
      title: 'GraphQL API Reference',
      description: 'Welcome to the party!',
      termsOfService: 'https://www.example.com/terms',
      contact: {
        name: 'API Support',
        url: 'https://www.example.com/support',
        email: 'support@odzi.dog',
      },
      license: {
        name: 'Apache 2.0',
        url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
      },
    },
    servers: [
      {
        url: 'https://api.pawcapsu.ml/graphql',
        description: 'Production',
        production: true,
      },
    ],
  },
};

// Run the main app with parsed options
spectaql(options).catch(console.warn)