const version = document.createElement('span');

const test = document.createElement('p');


function append(parent, el) {
    return parent.appendChild(el);
}


var url = new URL('https://api.github.com/repos/TheDropX/thedrop.me/commits')

var params = {since:"2018-01-01T00:00:00Z"}

url.search = new URLSearchParams(params);


var asd = fetch(url)
    .then((res) => { return res.json() })
    .then(function(data) { 
            
        console.log(data.length);
        version.innerHTML = data.length.toString().replace(/\B(?=(\d{1})+(?!\d))/g, ".");;

    });


var load_time = (Date.now() - timerStart) / 6000;


var load = document.getElementById('load');

var footer = document.getElementById('footer');


load.style = "text-align: right;";

load.innerHTML = `This page took ${load_time.toFixed(4)} seconds to load | Developed by TheDrop. | Current version: v`;


test.classList.add("no-margin")

test.style = "float: left!important;"

test.innerHTML = `Copyright &copy; 2018-2019 | thedrop.me`;


append(load, version);

append(load, test);
