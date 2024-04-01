// Require Dotenv
require("dotenv").config();
// Require the cloudinary library
const cloudinary = require("cloudinary").v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true,
});

////////////////////////////////////////////
// Auto-Crop
// Use auto-crop to crop the following image to a smaller size
// Reference: https://cloudinary.com/documentation/transformation_reference#c_auto
console.log(cloudinary.image("pe-ai-vilt/ai_practice_mountain_scene", {}));
