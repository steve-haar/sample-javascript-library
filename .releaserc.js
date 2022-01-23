module.exports = {
  branches: ['main'],
  plugins: [
    ["@semantic-release/commit-analyzer", {
      "releaseRules": [
        { "breaking": true, "release": "major" },
        { "type": "feat", "release": "minor" },
        { "type": "fix", "release": "patch" },
        { "type": "chore", "release": false }
      ],
      "parserOpts": {
        "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES"]
      }
    }],
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
    ["semantic-release-npm-deprecate-old-versions", {
      "rules": [
        {
          "rule": "supportLatest",
          "options": {
            "numberOfMajorReleases": 2,
            "numberOfMinorReleases": "all",
            "numberOfPatchReleases": "all"
          }
        },
        "deprecateAll"
      ]
    }]
  ]
};
