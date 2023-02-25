const loadCountries =() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(res => displayCountries(res))
}

const displayCountries = (countries) =>{
    const countriesContainer = document.getElementById('all-countries')
    // console.log(countries);
//     for(const country of countries){
//         console.log(country)
//     }
countries.forEach(country => { console.log(country.cca2)
const div = document.createElement('div');
div.classList.add('onCountry');
div.innerHTML = `
<h2 class="text-xl"> Country Name: ${country.name.common} </span> </h2>
<p class="text-2xl"> Capital:- ${country.capital? country.capital[0] : 'no capital'} </p>
<button onclick ="displayCountryDetails('${country.cca2}')" class=" px-5 py-1 rounded-xls mt-5 bg-orange-600"> Details </button> 

`
countriesContainer.appendChild(div)
});
}

const displayCountryDetails = code =>{
const url = `https://restcountries.com/v2/alpha/${code}`;
fetch(url)
.then(res => res.json())
.then(data => showCountryDetail(data));
}

const showCountryDetail = country =>{
    const countryDetailContainer = document.getElementById('country-detail')
    countryDetailContainer.innerHTML =`
    <h1 class ="tex-center font-bold"> Name:- ${country.name}</h1>
    <h1 class ="tex-center font-bold"> Capital:- ${country.capital}</h1>
    <h1 class ="tex-center font-bold"> Area:- ${country.area}</h1>
    <h1 class ="tex-center font-bold"> Population:- ${country.population}</h1>
    <img src="${country.flags.png}">

    `

}

    



