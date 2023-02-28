const app = require("./app");
const PORT = process.env.PORT || 3000;

const init = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`App running on port ${PORT}!`);
    });
  } catch (err) {
    console.log(err);
  }
};
init();

//Nica's edit
