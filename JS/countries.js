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
countries.forEach(country => { console.log(country)
const div = document.createElement('div');
countriesContainer.classList.add('onCountry')
div.innerHTML = `
<h2 class="text-center text-2xl"> Name: <span class="font-bold"> ${country.name.common} </span> </h2>
<p class="text-center"> ${country.capital? country.capital[0] : 'no capital'} </p>
`
countriesContainer.appendChild(div)
});
}

    



loadCountries()