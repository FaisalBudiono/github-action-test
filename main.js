const { Octokit } = require("@octokit/rest");

const okto = new Octokit();

const parent = await okto.rest.pulls.get({
  // issue_number: context.issue.number,
  // owner: context.repo.owner,
  // repo: context.repo.repo,
  pull_number: "asd",
});

const labels = parent.data.labels
  .map((l) => l.name)
  .filter((l) => l === "invalid");

const create = await okto.rest.pulls.create({
  owner: context.repo.owner,
  repo: context.repo.repo,
  title: "title",
  body: "amazing",
  base: "staging",
  head: "target",
});

const modifyLabel = await okto.rest.issues.setLabels({
  owner: context.repo.owner,
  repo: context.repo.repo,
  issue_number: 20,
  labels: [],
});

const stagingPRs = await okto.rest.pulls.list({
  owner: context.repo.owner,
  repo: context.repo.repo,
  state: "open",
  head: prInfo.head,
  base: "auto-pr/staging",
});

stagingPRs.data[0].number;
