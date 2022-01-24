module.exports = {
  branches: [
    'main',
    '+([0-9]).x',
    { name:  'next', prerelease:  true }
  ],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [
          { breaking: true, release: 'major' },
          { type: 'feat', release: 'minor' },
          { type: 'fix', release: 'patch' },
          { type: 'chore', release: false }
        ],
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES']
        }
      }
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    '@semantic-release/npm',
    [
      'semantic-release-npm-deprecate-old-versions',
      {
        rules: [
          {
            rule: 'supportLatest',
            options: {
              numberOfMajorReleases: 2,
              numberOfMinorReleases: 1,
              numberOfPatchReleases: 1
            }
          },
          'deprecateAll'
        ]
      }
    ],
    [
      'semantic-release-slack-bot',
      {
        notifyOnSuccess: true,
        notifyOnFail: true
      }
    ]
  ]
};
