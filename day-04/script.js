/** uncomment one of these **/
// import OpenAI from "openai"
// import { HfInference } from '@huggingface/inference'

document
  .getElementById("window-container")
  .addEventListener("click", async function () {
    // Generate a joke using Jokes API AppSpot
    const jokeDisplay = document.getElementById("joke-display")
    jokeDisplay.innerHTML = await generateJoke()

    // Open the doors and display a joke when clicked
    document.querySelector(".left-door").style =
      "animation: left-open 0.3s forwards"
    document.querySelector(".right-door").style =
      "animation: right-open 0.3s forwards"
    document.querySelector(".joke-display").style =
      "animation: display-joke 0.3s forwards"
  })

// Function to fetch a joke from Dad Jokes API
async function generateJoke() {
  try {
    // fetch api
    const response = await fetch(
      "https://official-joke-api.appspot.com/jokes/programming/random",
      {
        headers: {
          Accept: "application/json",
        },
      }
    )

    // generate joke
    const result = await response.json()
    // generate and store jokes
    const joke = result[0].setup + " " + result[0].delivery
    // display jokes
    console.log(joke)
    return `<p>${joke}</p>`
  } catch (error) {
    // try catch to handle error if any
    console.error("Error:", error)
    return "Failed to fetch a joke. Please try again."
  }
}
