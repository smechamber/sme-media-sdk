import { MediaClient } from "../src/index.js";

const media = new MediaClient({
  baseUrl: "https://media.smebusinessforum.com",
  token: "",
});

async function main() {
  try {
    const health = await media.health();

    console.log(health);
  } catch (err) {
    console.error(err);
  }
}

main();