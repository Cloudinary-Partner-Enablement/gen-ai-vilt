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
console.log(
  cloudinary.image("pe-ai-vilt/ai_practice_dance", {
    gravity: "auto",
    height: 215,
    width: 215,
    crop: "auto",
  })
);

////////////////////////////////////////////
// Generative Caption
cloudinary.api
  .update("pe-ai-vilt/ai_practice_track_running", { detection: "captioning" })
  .then((result) => console.log(result.info.detection.captioning));

////////////////////////////////////////////
// Generative Fill
console.log(
  cloudinary.image("pe-ai-vilt/ai_practice_dog", {
    aspect_ratio: "16:9",
    background: "gen_fill",
    width: 1500,
    crop: "pad",
  })
);

////////////////////////////////////////////
// Generative Recolor
console.log(
  cloudinary.image("pe-ai-vilt/ai_practice_dress", {
    effect: "gen_recolor:prompt_dress;to-color_7fc3f0",
  })
);

////////////////////////////////////////////
// Generative Remove
console.log(
  cloudinary.image("pe-ai-vilt/ai_practice_woman_mountain", {
    effect: "gen_remove:prompt_woman",
  })
);

////////////////////////////////////////////
// Generative Replace
console.log(
  cloudinary.image("pe-ai-vilt/ai_practice_coffee", {
    effect: "gen_replace:from_bread;to_croissant",
  })
);

////////////////////////////////////////////
// Generative Restore
console.log(
  cloudinary.image("pe-ai-vilt/ai_practice_woman", {
    effect: "gen_restore",
  })
);
