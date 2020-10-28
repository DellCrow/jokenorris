const joke = document.querySelector("#joke");

function generateJoke(category) {
  const url = "https://api.chucknorris.io/jokes/random?category=" + category;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let genJoke = '"' + data.value + '"';
      joke.innerHTML = genJoke;
    });
}
