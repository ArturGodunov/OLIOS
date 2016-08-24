module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			dist: {
				options: {
					style: 'compressed',
					sourcemap: 'none'
				},
				files: {
					'assets/styles/styles.css': 'app/app.scss'
				}
			}
		},

		autoprefixer: {
			options: {
				browsers: ['last 3 versions', 'ie 9', 'ie 10']
			},
			dist:{
				files:{
					'assets/styles/styles.css': 'assets/styles/styles.css'
				}
			}
		},

		watch: {
			css: {
				files: [
                    'app/**/*.scss'
                ],
				tasks: ['sass:dist', 'autoprefixer:dist'],
				options: {
					spawn: false
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('deploy', [
        'sass',
		'autoprefixer'
    ]);

	grunt.registerTask('dev', [
		'sass',
		'autoprefixer',
		'watch'
	]);
};