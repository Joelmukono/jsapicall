const myButton = document.getElementById('fetch');
myButton.addEventListener("click",fetchInfo)

function fetchInfo(){
    fetch('https://restcountries.eu/rest/v2/all')
.then(response=>response.json())
.then(jsonObj=>displayUi(jsonObj))
.catch(()=> alert("cant fetch at this time"))
}

function displayUi (country) {
    const { name, capital, languages, currencies, population, region } = country[Math.floor(Math.random() * 150)]
    const template = `
    <div>
    <h1 id="head">${name}</h1>
    <p id="content"> This is a country with its capital in ${capital}. 
    The language(s) spoken here are ${languages[0].name}. 
  The nation of ${name} is 
    located in the ${region} region with a population of ${population} and uses ${currencies[0].name} 
  as it's currency</P>
    </div>
    `
    // did this so I would avoid the process of having a refresh/update button
    document.getElementById('template').innerHTML = template
  }
