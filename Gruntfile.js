
var sourceDir = "src/"
var configDir = sourceDir +"config/"
var sourceDirWebApp = sourceDir +"webapp/"
var sourceDirServerApp = sourceDir +"modules/";
var buildDirServerApp = "build/";

module.exports = function(grunt) {
	grunt.initConfig({
		concat: {
			options: {
				separator: ';'
			},
			server: {
				src: [
                    configDir + '**/*.js',
					sourceDirServerApp + '**/*.js',
                    sourceDir + 'Main.js'
				],
				dest: buildDirServerApp + 'server.js'
			}
		},
        copy: {
            main: {
                files: [
                    {expand: true, cwd: sourceDir, src: ['**/*'], dest: buildDirServerApp },
                ]
            }
        },
		open: {
			server: {
				path: 'http://localhost:3000/'
			}
		},
		nodemon: {
			dev: {
				options: {
					file: buildDirServerApp + 'Main.js',
					watchedExtensions: ['js'],
					watchedFolders: [sourceDir],
					delayTime: 1,
					legacyWatch: true
				}
			}
		}
	});


	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-open');

	grunt.registerTask('server', [
		'build',
		'nodemon'
	]);

	grunt.registerTask('build', [
		'copy'
	]);

	grunt.registerTask('default', [
		'build',
        'open'
	]);
};