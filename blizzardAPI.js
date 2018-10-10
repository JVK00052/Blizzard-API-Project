//Defining Constants 
const baseURL = "https://us.api.battle.net/wow/boss/?locale=en_US&apikey="
const key = "den2d8x2gg9dqet4mnkd65v9nr6kmveh"
let url;

//Defining Js -> Html links
const findTerm = document.querySelector('.search');
const findForm = document.querySelector('form');
const searchBtn = document.querySelector('.submit');
const section = document.querySelector('section');

//Defining Functions for Js to work with Html
findForm.addEventListener('submit', findResults)
function findResults(e) {
    e.preventDefault();
    console.log(e)
    url = baseURL + key + '&q'
    console.log(url)
    fetch(url)
        .then(function (response) {
            return response.json()
        }).then(function (json) {
            console.log(json)
            findResults(json);
        })
    function findResults(json) {
        while (section.firstChild) {
            section.removeChild(section.firstChild)
        }
        let dataName = json.bosses
        if (dataName === 0) {
            console.log('No results');
        } else {
            for (let i = 0; i < dataName.length; i++) {
                //console.log(i);
                let name = document.createElement('h1')
                let desc = document.createElement('h3')

                name.textContent = `Name: ${json.bosses[i].name}`;
                desc.textContent = `Description: ${json.bosses[i].description}`
                if (json.bosses[i].name == document.getElementById('search').value) {
                    section.appendChild(name)
                    section.appendChild(desc)
                } else {
                    console.log('ERROR 404')
                }

            }
        }
    }
}

