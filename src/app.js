function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 20,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userInstructionsInput =
    document.querySelector("#user-instructions").value;
  let apiKey = "e7fo6tea7dab2f64b9d0694388b0ea0f";
  let context = `You are a haiku poem expert. A haiku poem consists of seventeen syllables, in three lines of five, seven, and five, traditionally evoking images of the natural world. You need to generate a short haiku poem using ${userInstructionsInput} no more than 5 lines. Make sure to follow instructions.`;
  let prompt = `User instructions: please generate a haiku poem about ${userInstructionsInput}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemELement = document.querySelector("#poem");
  poemELement.classList.remove("hidden");
  poemELement.innerHTML = `💭Thinking...`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#submit-button");
poemFormElement.addEventListener("click", generatePoem);
