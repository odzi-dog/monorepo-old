const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
      fontSize: {
        "extra-xs": "0.65rem"
      },

      height: {
        '100vh': '100vh',
        '200vh': '200vh'
      },

      borderWidth: {
        '1': '1px'
      },

      backgroundColor: {
        'blue-btn': '#2e658a'
      }
    },
	},
	plugins: [],
};

module.exports = config;
