function append(parent, el) {
    return parent.appendChild(el);
  }

  const orgdivs = document.getElementById('orgs');

  fetch('https://api.github.com/users/TheDropX/orgs')
      .then((res) => { return res.json() })
      .then(function(data) { 
        
      return data.map(function(data) {

        var div = document.createElement('div');
        var org_name = document.createElement('p');
        var org_img = document.createElement('img');

        div.classList.add("organization-tab");

        org_name.classList.add("organization-name");
        org_img.classList.add("header__avatar");
        org_img.classList.add("organization-image");
        org_img.src = data.avatar_url;

        org_name.innerHTML += data.login;
        org_img.src = data.avatar_url;

        append(orgdivs, div);

        append(div, org_img);
        append(div, org_name);

      })

})