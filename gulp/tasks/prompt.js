/**
 * Description: Copy files
 *
 * */
const gulp = require('gulp');
const path = require('path');
const replace = require('gulp-replace');
const inquirer = require('inquirer');
const questions = [
	{
		type: 'list',
		name: 'system',
		message: 'Which system will you be using',
		choices: [
			'magento',
			'typo3',
			'symfony'
		]
	},
	{
		type: 'list',
		name: 'createTheme',
		message: 'Do you need themes?',
		choices: [
			'no',
			'yes'
		]
	},
	{
		type: 'input',
		name: 'themeName',
		message: 'What is your theme called?',
		when: function (answers) {
			return answers.createTheme === 'yes'
		}
	}
];

inquirer
	.prompt(questions)
	.then(answers => {
		gulp
			.src(path.join(process.cwd(), 'gulp/config.js'))
			.pipe(replace('%%system%%', answers.system))
			.pipe(gulp.dest(path.join(process.cwd(), 'gulp/')));
	});