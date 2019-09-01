const ul = document.getElementById('presence');
const username = document.getElementById('username');
const game = document.getElementById('game');
const details = document.getElementById('details');
const state = document.getElementById('state');

const largeImage = document.getElementById('largeImage');
const smallImage = document.getElementById('smallImage');

fetch('https://api.thedrop.me/presences/293828021134295040')
    .then((res) => { return res.json() })
    .then(function(data) {
return data.map(function(data) {

  username.innerHTML = `${data.userTag}`;

  if(data.game != null) {

    game.innerHTML = `${data.game}`;
    details.innerHTML = `${data.details}`;
    state.innerHTML = `${data.state}`;

    largeImage.src = `https://cdn.discordapp.com/app-assets/${data.applicationID}/${data.largeImage}.png`;

    if(data.smallImage != null) {

      smallImage.src = `https://cdn.discordapp.com/app-assets/${data.applicationID}/${data.smallImage}.png`;

    } else {

      smallImage.remove();

    }

  } else {

    game.innerHTML = `No game detected.`;
    details.innerHTML = `-`;
    state.innerHTML = `-`;

    largeImage.src = "https://discordapp.com/assets/1c8a54f25d101bdc607cec7228247a9a.svg";
    largeImage.style = "";
    smallImage.remove();

  }

})
})
