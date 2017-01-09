let helpers = require('yeoman-test');
let assert = require('yeoman-assert');
var path = require('path');

describe('office-prototype:app', function () {
	let projectDisplayName = 'My Office Add-in';
	let projectEscapedName = 'my-office-add-in';
	let answers = {
		name: projectDisplayName,
		new: true,
		folder: false,
		host: 'word',
		ts: true,
		framework: 'jquery'
	};
	let manifestFileName = 'manifest-' + answers.host + '-' + projectEscapedName + '.xml';

	beforeEach(function (done) {
		helpers.run(path.join(__dirname, '../generators/app')).withPrompts(answers).on('end', done);
	});

	it('creates expected files', function (done) {
		let expected = [
			manifestFileName,
			'package.json',
			'bsconfig.json',
			'src/app.css',
			'src/assets/icon-16.png',
			'src/assets/icon-32.png',
			'src/assets/icon-80.png',
			'src/assets/logo-filled.png',
			'tsconfig.json',
			'src/app.ts',
			'src/index.html',
			'typings.json',
		];
		assert.file(expected);
		done();
	})
});

