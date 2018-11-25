const Query = `
 extend type Query {
   skills: [Skill]
 }
`;

export const queryTypes = () => [Query];

export const queryResolvers = {
	Query: {
		skills: () => [
			{
				title: 'HTML (5)',
				iconName: 'html5',
				group: 'web',
			},
			{
				title: 'CSS (3)',
				iconName: 'css3',
				group: 'web',
			},
			{
				title: 'JS (ES6)',
				iconName: 'javascript_shield',
				group: 'javascript',
			},
			{
				title: 'SASS',
				iconName: 'sass',
				group: 'web',
			},
			{
				title: 'React',
				iconName: 'react',
				group: 'javascript',
			},
			{
				title: 'Redis',
				iconName: 'redis',
				group: 'data',
			},
			{
				title: 'NodeJS',
				iconName: 'nodejs_small',
				group: 'javascript',
			},
			{
				title: 'MongoDB',
				iconName: 'mongodb',
				group: 'data',
			},
			{
				title: 'Magento(2)',
				iconName: 'magento',
				group: 'cms',
			},
			{
				title: 'Typo3',
				iconName: 'typo3',
				group: 'cms',
			},
			{
				title: 'Wordpress',
				iconName: 'wordpress',
				group: 'cms',
			},
			{
				title: 'Gulp',
				iconName: 'gulp',
				group: 'automation',
			},
			{
				title: 'Git',
				iconName: 'git',
				group: 'versioning',
			},
			{
				title: 'Grunt',
				iconName: 'grunt',
				group: 'automation',
			},
			{
				title: 'NPM',
				iconName: 'npm',
				group: 'versioning',
			},
			{
				title: 'VS Code',
				iconName: 'visualstudio',
				group: 'editor',
			},
			{
				title: 'Photoshop',
				iconName: 'photoshop',
				group: 'design',
			},
			{
				title: 'JIRA',
				iconName: 'jira',
				group: 'project-management',
			},
			{
				title: 'SCRUM',
				iconName: 'scrum',
				group: 'project-management',
			},
		],
	},
};
