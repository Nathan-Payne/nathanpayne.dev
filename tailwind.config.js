module.exports = {
	purge: {
		enabled: true,
		content: [ './views/**/*.ejs', './views/*.ejs', './public/**/*.js' ]
	},
	theme: {
		extend: {
			fontFamily: {
				mav: [ 'Maven Pro' ]
			},
			spacing: {
				'1/2': '50%',
				'1/5': '20%',
				'2/5': '40%',
				'3/5': '60%',
				'4/5': '80%'
			},
			colors: {
				dark: '#171b24',
				ocean: '#004e73',
				sky: '#0196ce',
				fire: '#f17300',
				cloud: '#e6e8ee'
			}
		}
	},
	variants: {},
	plugins: []
};

//	purge: { enabled: true, content: [ './views/**/*.ejs' ] }, //purge css inside dev env
// spacing adds more selectors to padding/margin, %padding-bottom is a trick to fix aspect ratio of div
