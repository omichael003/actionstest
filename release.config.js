module.exports = {
    branches: "main",
    repositoryUrl: "https://github.com/omichael003/actionstest.git",
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/git',
      '@semantic-release/github']
 }
 