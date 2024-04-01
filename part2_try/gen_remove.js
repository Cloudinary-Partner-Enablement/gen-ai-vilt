// Require Dotenv
require("dotenv").config();
// Require the cloudinary library
const cloudinary = require("cloudinary").v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true,
});

////////////////////////////////////////////
// Generative Remove
// Remove the chopsticks from the image
// Reference: https://cloudinary.com/documentation/ai_in_action#generative_remove
console.log(cloudinary.image("pe-ai-vilt/ai_practice_sushi", {}));
