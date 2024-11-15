function displayPoem(response) {
  console.log("poem generated");

  new Typewriter("#haiku", {
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
  let context = `You are a haiku poem expert and love to write unique haiku poems. You need to generate a haiku poem using ${userInstructionsInput} Make sure to follow instructions.`;
  let prompt = `User instructions: please generate a haiku poem about ${userInstructionsInput}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem");

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#submit-button");
poemFormElement.addEventListener("click", generatePoem);
