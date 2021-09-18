function getDog() {
    fetch("https://dog.ceo/api/breed/chihuahua/images/random")
      .then(response => response.json())
      .then(data => {
        const img = document.querySelector('img');
        img.src = data.message;
        img.alt = "un perrete";
      });
  }
  document.querySelector('.js-select').addEventListener("click", getDog);