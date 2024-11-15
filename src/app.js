function displayPoem(response) {
  console.log("poem generated");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 20,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userInstructionsInput = document.querySelector("#user-instructions");
  let apiKey = "e7fo6tea7dab2f64b9d0694388b0ea0f";
  let context = `You are a Spanish poem expert. You need to generate a short Spanish poem using ${userInstructionsInput} no more than 5 lines. Make sure to follow instructions.`;
  let prompt = `User instructions: please generate a short poem in Spanish about ${userInstructionsInput}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem");

  let poemELement = document.querySelector("#poem");
  poemELement.classList.remove("hidden");
  poemELement.innerHTML = `Generating a poem about ${userInstructionsInput}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#submit-button");
poemFormElement.addEventListener("click", generatePoem);
