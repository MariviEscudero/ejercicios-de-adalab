function getUserData() {
    fetch("https://swapi.dev/api/people/1/")
      .then(response => response.json())
      .then(dataPeople => {
        console.log(dataPeople);
        document.querySelector('.js_name').innerHTML +=  dataPeople.name;
        document.querySelector('.js_gender').innerHTML += dataPeople.gender; 
        fetch("https://swapi.dev/api/species/1/")
        .then(response => response.json())
        .then(dataSpecies => {
          console.log(dataSpecies);
        const species = document.querySelector('.js_species').innerHTML += dataSpecies.name; 
        
      });
        const homeworld = document.querySelector('.js_homeworld');
        homeworld.src = dataPeople.homeworld;
      });
  }
  document.querySelector('.js_select').addEventListener("click", getUserData);