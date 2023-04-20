let display = document.getElementById("display");


async function displayCountries() {
    let allCountries = await fetch("https://restcountries.com/v3.1/all");
    let result = await allCountries.json();
    console.log(result);
    result.forEach((element, index) => {
        display.innerHTML += `
         <tr class="">
            <td>${index+1}</td>
            <td>${element.name.common}</td>
            <td>${element.capital}</td>
            <td>${element.population}</td>
            <td>${Object.values(element.languages).join(", ")}</td>
            <td>${element.independent}</td>
         </tr>
         `
    });
}

displayCountries();

async function showIndependent() {
    let allCountries = await fetch("https://restcountries.com/v3.1/all");
    let result = await allCountries.json();
    let indptCountries = result.filter((country) => country.independent == true);
    console.log(indptCountries);
    display.innerHTML = "";
    indptCountries.forEach((element, index) => {
        display.innerHTML += `
         <tr class="">
            <td>${index+1}</td>
            <td>${element.name.common}</td>
            <td>${element.capital}</td>
            <td>${element.population}</td>
            <td>${Object.values(element.languages).join(", ")}</td>
            <td>${element.independent}</td>
         </tr>
         `
    });
}

async function showNonIndependent() {
    let allCountries = await fetch("https://restcountries.com/v3.1/all");
    let result = await allCountries.json();
    let nonIndptCountries = result.filter((country) => country.independent == false);
    console.log(nonIndptCountries);
    display.innerHTML = "";
    nonIndptCountries.forEach((element, index) => {
        display.innerHTML += `
         <tr class="">
            <td>${index+1}</td>
            <td>${element.name.common}</td>
            <td>${element.capital}</td>
            <td>${element.population}</td>
            <td>${Object.values(element.languages).join(", ")}</td>
            <td>${element.independent}</td>
         </tr>
         `
    });
}