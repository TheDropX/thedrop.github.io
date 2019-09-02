function append(parent, el) {
    return parent.appendChild(el);
  }

  fetch('https://api.github.com/users/TheDropX/repos')
      .then((res) => { return res.json() })
      .then(function(data) { 
        
      return data.map(function(data) {

        var repo_p = document.createElement('p');
        var repo = document.createElement('a');
        var repo_div = document.getElementById('repos');

        repo.setAttribute('href', `https://github.com/${data.full_name}`);

        if(data.fork == false) {

            repo.innerHTML += data.full_name;

        }

        append(repo_div, repo_p);
        append(repo_p, repo);

      })

})