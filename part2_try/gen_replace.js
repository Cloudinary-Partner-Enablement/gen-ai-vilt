// Require Dotenv
require("dotenv").config();
// Require the cloudinary library
const cloudinary = require("cloudinary").v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true,
});

////////////////////////////////////////////
// Generative Replace
// Replace the cocktail with coffee
// Reference: https://cloudinary.com/documentation/ai_in_action#generative_replace
console.log(cloudinary.image("pe-ai-vilt/ai_practice_cocktail", {}));
