function addUser() {
  username = document.getElementById('username').value;
  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json().then(data => {
      console.log(data);
      const name = data.name;
      const bio = data.bio;
      const followers = data.followers;
      const following = data.following;
      const repos = data.public_repos;
      const profile = data.avatar_url;
      const log = data.login;
      document.getElementById('name').textContent = data.name;
      document.getElementById('bio').textContent = data.bio;
      document.getElementById('repos').textContent = data.repos;
      document.getElementById('followers').textContent = data.followers + " Followers";
      document.getElementById('following').textContent = data.following + " Following";
      document.getElementById('repos').textContent = data.public_repos + " Public Repos";
      document.getElementById('profile').src = data.avatar_url;
      dataToProcess = {name, bio, followers, following, repos, profile, log};
    }));

  fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json().then(data2 => {
      let repos_length = data2.length;
      dataToSend = JSON.stringify(dataToProcess);
      dataToProcess = JSON.parse(dataToSend);

      let j = 0;
      while (j < repos_length) {
        for (i = 0; i < repos_length; i++) {
          repo_names[i] = data2[i].full_name;
          console.log(repo_names[i]);
          dataToProcess["repo[" + i + "]"] = repo_names[i];
          j++;
        };
        dataToProcess["repos_length"] = repos_length;
        console.log(dataToProcess);


        options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dataToProcess)
        };
        if (j => length) {
          fetch('/api', options).then(response => response.json().then(data => {
            console.log("Success" + data);
          }));
        };
      };
    }));

};
