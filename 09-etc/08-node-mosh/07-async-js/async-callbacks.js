console.log('Before');

// ASYNC CODE WITH CALLBACKS

getUser(1, (user) => {
  console.log('USER', user);

  getRepositories(user.gitHubUserName, (repos) => {
    console.log('repos', repos);

    getRepositoryDetails(repos, (repoDetails) => {
      console.log(repoDetails);
    });
  });
});

console.log('After');

function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading a user from database');

    callback({ id: id, gitHubUserName: 'Mosh' });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log('Reading repos from DB');

    callback({ username, repos: ['repo1', 'repo2', 'repo3'] });
  }, 2000);
}

function getRepositoryDetails(repositories, callback) {
  setTimeout(() => {
    console.log('Reading repo details from DB', repositories);

    const map = repositories.repos.map((repo, i) => {
      return { repo, repoId: i };
    });

    callback(map);
  }, 1000);
}
