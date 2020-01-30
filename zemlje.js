const inputArea = document.querySelector('.input')
const searchBtn = document.querySelector('.searchbtn')
   
   
const flexContainer = document.querySelector('.flex-container')
const url = "https://restcountries.eu/rest/v2/all"
fetch(url)
    .then(response => response.json()) //
    .then(countries => {

        searchBtn.addEventListener("click", generateCountry);

        function generateCountry() { //FN to GENERATE COUNTRY

          for (const country of countries) {
            
            let div = document.createElement('div')
            let countryName = document.createElement('h2')
            let countryCapital = document.createElement('p')
            let countryPopulation = document.createElement('p')
            
            countryName.textContent = country.name
            countryCapital.textContent = country.capital           
            countryPopulation.textContent = country.population
        
            div.appendChild(countryName)
            div.appendChild(countryCapital)
            div.appendChild(countryPopulation)
          
            flexContainer.appendChild(div)
            
            
          } //Loop END
     
    }
    window.onload = totalCountryNumber;

    function totalCountryNumber() {
    
    let num = countries.length
    document.querySelector('.headerNumber').value = num //this is printed in input field ,class '.header number' 
    
    }   
         
    
    })
//TOTAL NUMBER OF COUNTRIES will fill onload with window.onload = function ()

   

    
