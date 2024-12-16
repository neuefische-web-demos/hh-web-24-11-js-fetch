// Import Functions & Modules
import { JokeSection } from "../components/JokeSection/JokeSection.js";
import { Joke } from "../components/Joke/Joke.js";

// Declare root Element
const root = document.body;

// Assemble DOM for joke section
const jokeSection = JokeSection();
root.append(jokeSection);

// Button for demonstating browser blockade
const button = document.querySelector("button");
button.addEventListener("click", () => {
  // Fetch Fake:
  // for (let i = 0; i < 10000000000; i++) {
  //     const a = i;
  //   }
  console.log("You clicked me...");
});

function renderJoke(joke) {
  // Clear the joke section
  jokeSection.innerHTML = "";

  // Create a new joke DOM element and append it to joke section
  const newJoke = Joke(joke);

  jokeSection.append(newJoke);
}

//renderJoke("Thanks for explaining the word “many” to me, it means a lot.");
async function fetchDataFromAPI() {


  
  const response = await fetch(
    "https://example-apis.vercel.app/api/bad-jokes/2"
  );
  console.log(response);
  const data = await response.json();
  console.log(data);
  renderJoke(data.joke);
}



console.log("A");
fetchDataFromAPI();
console.log("B");
