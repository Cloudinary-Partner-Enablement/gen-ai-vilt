// Require Dotenv
require("dotenv").config();
// Require the cloudinary library
const cloudinary = require("cloudinary").v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true,
});

////////////////////////////////////////////
// Generative Fill
// Use Gen Fill to adjust the size of the image and fill the space
// Reference: https://cloudinary.com/documentation/ai_in_action#generative_fill
console.log(cloudinary.image("pe-ai-vilt/ai_practice_cat", {}));
