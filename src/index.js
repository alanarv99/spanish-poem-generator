function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let inputElement = document.querySelector("#input");
  let apiKey = "260420cae416f4dteddo330fbd8c9c7b";
  let prompt = `Generate a spanish poem about ${inputElement.value}`;
  let context =
    "User instructions: You are a poem expert and you love to write short poems. Your mission is to generate a polite four line poem in basic HTML without any extra spaces before or after. Please follow user instructions and do not include any prefaces about the poem nor html signage. Sign at the end of the poem with 'SheCodes AI' with <strong></strong>";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poemForm");
poemFormElement.addEventListener("submit", generatePoem);
