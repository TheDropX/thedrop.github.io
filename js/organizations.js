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
        var org_desc = document.createElement('p');

        div.classList.add("organization-tab");
        div.classList.add("gradient-border");

        org_name.classList.add("organization-name");
        org_desc.classList.add("organization-description");

        org_img.classList.add("header__avatar");
        org_img.classList.add("organization-image");
        org_img.src = data.avatar_url;

        org_name.innerHTML += data.login;
        org_desc.innerHTML += data.description;

        append(orgdivs, div);

        append(div, org_img);
        append(div, org_name);
        append(div, org_desc);

      })

})