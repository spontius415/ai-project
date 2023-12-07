function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "What is in a name?",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
