function getUserData() {
    fetch("https://api.github.com/users/{username}")
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
      });
  }
  document.querySelector('.js-select').addEventListener("click", getUserData);