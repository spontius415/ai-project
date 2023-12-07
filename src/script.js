function displayPoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "What is in a name?",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "4bt8b93f064b82fc559aa03do3abc2f3";
  let context =
    "You are an AI assistant and a poem generator. You love to write short poems. Your mission is to generate a 4 line poem in basic HTML and seperate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign off the poem with 'Yours Truly, Anon' at the end of the poem.";
  let prompt = `User instructions: Please create a poem about this ${instructionsInput}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem");

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
