module.exports = {
	extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
	// add your custom config here
	// https://stylelint.io/user-guide/configuration
	rules: {
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'function',
					'if',
					'mixin',
					'include',
					'use',
					'return',
				],
			},
		],
		'block-no-empty': null,
		'unit-allowed-list': ['px', 'em', 'rem', 's', 'vh', 'vw', '%', 'deg'],
	},
};
