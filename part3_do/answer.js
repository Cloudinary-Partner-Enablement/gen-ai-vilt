// Require Dotenv
require("dotenv").config();
// Require the cloudinary library
const cloudinary = require("cloudinary").v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true,
});

////////////////////////////////////////////
// CHALLENGES
// Pick from one of the three challenges below.
// There is an additional challenge for each if you would
// like to test your skills further.
// Comment out (cmd or ctrl +/) the other code starters
// before running the file.
////////////////////////////////////////////

////////////////////////////////////////////
// CHALLENGE OPTION 1
// Use the provided image to recolor the shoes to a color of your choice
//
// For an additional challenge, add in a second transformation to also crop
// the image to a width of 550 with an AR of 3:5 and set gravity to auto
// Reference: https://cloudinary.com/documentation/transformation_reference#e_gen_recolor
// Additional reference: https://cloudinary.com/documentation/layers#multiple_overlays
console.log(
  cloudinary.image("pe-ai-vilt/ai_practice_challenge_shoes", {
    effect: "gen_recolor:prompt_shoes;to-color_7fc3f0;multiple_true",
  })
);

console.log(
  cloudinary.image("pe-ai-vilt/ai_practice_challenge_shoes", {
    transformation: [
      { effect: "gen_recolor:prompt_shoes;to-color_7fc3f0;multiple_true" },
      {
        crop: "crop",
        aspect_ratio: "3:5",
        width: 550,
        gravity: "auto",
      },
    ],
  })
);

////////////////////////////////////////////
// CHALLENGE OPTION 2
// Remove an item of your choice from the provided image
//
// For an additional challenge, turn the image greyscale
// Reference: https://cloudinary.com/documentation/transformation_reference#e_gen_remove
// Additional reference: https://cloudinary.com/documentation/layers#multiple_overlays
//                       https://cloudinary.com/documentation/transformation_reference#e_grayscale
console.log(
  cloudinary.image("pe-ai-vilt/ai_practice_challenge_working", {
    effect: "gen_remove:prompt_laptop",
  })
);

console.log(
  cloudinary.image("pe-ai-vilt/ai_practice_challenge_working", {
    transformation: [
      { effect: "gen_remove:prompt_laptop" },
      {
        effect: "grayscale",
      },
    ],
  })
);

////////////////////////////////////////////
// CHALLENGE OPTION 3
// Use the provided image to replace the sunglasses to an item of your choice
//
// For an additional challenge, add in a second transformation to also create
// a thumbnail of the image to a width of 400 with an AR of 4:5 and set gravity to auto
// Reference: https://cloudinary.com/documentation/transformation_reference#e_gen_recolor
// Additional reference: https://cloudinary.com/documentation/layers#multiple_overlays
//                       https://cloudinary.com/documentation/resizing_and_cropping#thumb
console.log(
  cloudinary.image("pe-ai-vilt/ai_practice_challenge_pool", {
    effect: "gen_replace:from_sunglasses;to_cocktail",
  })
);

console.log(
  cloudinary.image("pe-ai-vilt/ai_practice_challenge_pool", {
    transformation: [
      { effect: "gen_replace:from_sunglasses;to_cocktail" },
      {
        crop: "thumb",
        aspect_ratio: "4:5",
        width: 400,
        gravity: "auto",
      },
    ],
  })
);
