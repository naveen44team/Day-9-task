let getCountries = () => {
    let data = new XMLHttpRequest;
    data.open("GET","https://restcountries.com/v3.1/all");
    data.send();
    data.responseType = "json";
    data.onload = () => {

        let countries = data.response;
        console.log(countries);

          // 1. Get all the countries from Asia continent /region using Filter function

          let asia = countries.filter((asian) => asian.continents[0]=="Asia");
          let asianCuntries = asia.map((names) => names.name.common);
          console.log(asianCuntries);

          // 2.Get all the countries with a population of less than 2 lakhs using Filter function

          let getpopulation = asia.filter((papulations) =>papulations.population < 200000);
          let papulation = getpopulation.map((populationless) => populationless.name.common);
          console.log(papulation);

          //3. Print the total population of countries using reduce function
            
          let totalpopulation = asia.filter((papulationss) =>papulationss.population);
          let over = totalpopulation.map((all) => all.population)
          const subtotal = over.reduce((sum,curr) => sum + curr, 0);
          console.log(subtotal);

            


        // Print the country which uses US Dollars as currency.

        let dollar = asia.filter((use) =>use.currencies.USD);
          let usedollar = dollar.map((usdollar) => usdollar.name.common);
        console.log(usedollar);

    }
}
getCountries();