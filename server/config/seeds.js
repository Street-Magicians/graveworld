const db = require("./connection");
const { SpiritToken } = require("../models");

db.once("open", async () => {
  await SpiritToken.deleteMany();

  console.log("categories seeded");

  const spiritTokens = await SpiritToken.insertMany([
    {
      name: "Flame Token",
      type: "",
      description: "The firey heart of the Flame ghost",
      image: "flameToken.png",
    },
    {
      name: "Wave Token",
      type: "",
      description: "The watery heart of the Wave ghost",
      image: "waveToken.png",
    },
    {
      name: "Root Token",
      type: "",
      description: "The earthy heart of the Root ghost",
      image: "rootToken.png",
    },
  ]);
});
