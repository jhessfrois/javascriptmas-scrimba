document
  .getElementById("window-container")
  .addEventListener("click", function () {
    fetch("https://v2.jokeapi.dev/joke/Christmas")
      .then((response) => response.json())
      .then((data) => {
        document.querySelector("#joke-display").innerHTML = `
                <span class="joke-setup">${data.setup}</span>
                <span class="joke-delivery">${data.delivery}</span>`
      })

    document.querySelector(".left-door").style =
      "animation: left-open 0.3s forwards"
    document.querySelector(".right-door").style =
      "animation: right-open 0.3s forwards"
    document.querySelector(".joke-display").style =
      "animation: display-joke 0.3s forwards"
  })
