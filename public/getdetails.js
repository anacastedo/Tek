let data; let data2; let name; let repo_names = []; let dataToProcess; let dataToSend; let options;

function getDetails() {
  document.getElementById('output').style.display = "block";
  name = document.getElementById('username').value;
  fetch(`https://api.github.com/users/${name}`)
    .then(response => response.json().then(data1 => {
      document.getElementById('name2').innerHTML = data1.name;
      document.getElementById('bio').innerHTML = data1.bio;
      document.getElementById('followers').innerHTML = data1.followers + " Followers";
      document.getElementById('following').innerHTML = data1.following + " Following";
      document.getElementById('repos').innerHTML = data1.public_repos + " Public Repos";
      document.getElementById('profile').innerHTML = `
            <img src="${data1.avatar_url}" />
            `
    }))
};
