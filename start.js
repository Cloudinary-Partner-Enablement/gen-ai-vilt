// Require Dotenv
require("dotenv").config();
// Require the cloudinary library
const cloudinary = require("cloudinary").v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true,
});

////////////////////////////////////////////
// Upload the practice images into your Cloudinary account
// Pictures royalty free from https://pixabay.com/

////////////////////////////////////////////
// Auto Crop
cloudinary.uploader
  .upload(
    "https://cdn.pixabay.com/photo/2017/10/28/07/47/woman-2896389_1280.jpg",
    { public_id: "ai_practice_mountain_scene", folder: "pe-ai-vilt" }
  )
  .then((result) => console.log(result));

cloudinary.uploader
  .upload(
    "https://cdn.pixabay.com/photo/2016/11/22/19/14/man-1850109_1280.jpg",
    { public_id: "ai_practice_dance", folder: "pe-ai-vilt" }
  )
  .then((result) => console.log(result));

////////////////////////////////////////////
// Gen Caption
cloudinary.uploader
  .upload(
    "https://cdn.pixabay.com/photo/2016/11/18/13/23/action-1834465_1280.jpg",
    { public_id: "ai_practice_track_running", folder: "pe-ai-vilt" }
  )
  .then((result) => console.log(result));

cloudinary.uploader
  .upload(
    "https://cdn.pixabay.com/photo/2016/11/14/03/05/surgery-1822458_1280.jpg",
    { public_id: "ai_practice_medical", folder: "pe-ai-vilt" }
  )
  .then((result) => console.log(result));

////////////////////////////////////////////
// Gen Fill
cloudinary.uploader
  .upload(
    "https://cdn.pixabay.com/photo/2023/04/15/17/08/bernese-mountain-dog-7928156_1280.jpg",
    { public_id: "ai_practice_dog", folder: "pe-ai-vilt" }
  )
  .then((result) => console.log(result));

cloudinary.uploader
  .upload(
    "https://cdn.pixabay.com/photo/2022/05/08/18/13/cat-7182671_1280.jpg",
    { public_id: "ai_practice_cat", folder: "pe-ai-vilt" }
  )
  .then((result) => console.log(result));

////////////////////////////////////////////
// Gen Recolor
cloudinary.uploader
  .upload(
    "https://cdn.pixabay.com/photo/2016/11/19/15/50/chair-1840011_1280.jpg",
    { public_id: "ai_practice_chair", folder: "pe-ai-vilt" }
  )
  .then((result) => console.log(result));

cloudinary.uploader
  .upload(
    "https://cdn.pixabay.com/photo/2021/09/30/18/26/woman-6670772_1280.jpg",
    { public_id: "ai_practice_dress", folder: "pe-ai-vilt" }
  )
  .then((result) => console.log(result));

////////////////////////////////////////////
// Gen Remove
cloudinary.uploader
  .upload(
    "https://cdn.pixabay.com/photo/2023/07/07/17/47/sushi-8113165_1280.jpg",
    { public_id: "ai_practice_sushi", folder: "pe-ai-vilt" }
  )
  .then((result) => console.log(result));

cloudinary.uploader
  .upload(
    "https://cdn.pixabay.com/photo/2017/08/06/18/29/woman-2594934_1280.jpg",
    { public_id: "ai_practice_woman_mountain", folder: "pe-ai-vilt" }
  )
  .then((result) => console.log(result));

////////////////////////////////////////////
// Gen Replace
cloudinary.uploader
  .upload(
    "https://cdn.pixabay.com/photo/2015/07/12/14/26/coffee-842020_1280.jpg",
    { public_id: "ai_practice_coffee", folder: "pe-ai-vilt" }
  )
  .then((result) => console.log(result));

cloudinary.uploader
  .upload(
    "https://cdn.pixabay.com/photo/2023/10/11/10/45/cocktail-8308286_1280.jpg",
    { public_id: "ai_practice_cocktail", folder: "pe-ai-vilt" }
  )
  .then((result) => console.log(result));

////////////////////////////////////////////
// Gen Restore
cloudinary.uploader
  .upload(
    "https://res.cloudinary.com/generative-ai-demos/image/upload/f_auto/q_auto/v1/website_assets/samples/restore/restore_1.jpg",
    { public_id: "ai_practice_woman", folder: "pe-ai-vilt" }
  )
  .then((result) => console.log(result));

cloudinary.uploader
  .upload(
    "https://res.cloudinary.com/generative-ai-demos/image/upload/f_auto/q_auto/v1/website_assets/samples/restore/restore_2.jpg",
    { public_id: "ai_practice_clothing", folder: "pe-ai-vilt" }
  )
  .then((result) => console.log(result));

////////////////////////////////////////////
// Challenge Images
cloudinary.uploader
  .upload(
    "https://cdn.pixabay.com/photo/2018/12/05/13/41/woman-3857758_1280.jpg",
    { public_id: "ai_practice_challenge_shoes", folder: "pe-ai-vilt" }
  )
  .then((result) => console.log(result));

cloudinary.uploader
  .upload(
    "https://cdn.pixabay.com/photo/2014/12/15/14/05/home-office-569153_1280.jpg",
    { public_id: "ai_practice_challenge_working", folder: "pe-ai-vilt" }
  )
  .then((result) => console.log(result));

cloudinary.uploader
  .upload(
    "https://cdn.pixabay.com/photo/2016/11/22/21/33/sunglasses-1850648_1280.jpg",
    { public_id: "ai_practice_challenge_pool", folder: "pe-ai-vilt" }
  )
  .then((result) => console.log(result));
