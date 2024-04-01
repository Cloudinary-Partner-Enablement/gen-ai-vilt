// Require Dotenv
require("dotenv").config();
// Require the cloudinary library
const cloudinary = require("cloudinary").v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true,
});

////////////////////////////////////////////
// Generative Restore
// Use Gen Restore to restore the given image
// Reference: https://cloudinary.com/documentation/ai_in_action#generative_restore
console.log(cloudinary.image("pe-ai-vilt/ai_practice_clothing", {}));
