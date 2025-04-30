const { Octokit } = require("@octokit/rest");

const okto = new Octokit();

const asd = await okto.rest.pulls.get({
  issue_number: context.issue.number,
  owner: context.repo.owner,
  repo: context.repo.repo,
});
