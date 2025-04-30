const { Octokit } = require("@octokit/rest");

const okto = new Octokit();

const asd = await okto.rest.pulls.create({
  owner: context.repo.owner,
  repo: context.repo.repo,
});
