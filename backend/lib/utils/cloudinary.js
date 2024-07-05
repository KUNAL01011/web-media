// import {v2 as cloudinary} from "cloudinary"
// import fs from "fs"

// const uploadOnCloudinary = async (localFilePath) => {
//     try {
//         if (!localFilePath) return null
//         //upload the file on cloudinary
//         const response = await cloudinary.uploader.upload(localFilePath, {
//             resource_type: "auto"
//         })
        
//         console.log("unlinke in")
//         // file has been uploaded successfull
//         //console.log("file is uploaded on cloudinary ", response.url);
//         fs.unlinkSync(localFilePath)
//         return response.secure_url;

//     } catch (error) {
//         console.log("unlinke in error")
//         console.log(error)
//         fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
//         return null;
//     }
// }



// export {uploadOnCloudinary}

import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // Upload the file to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("File uploaded to Cloudinary:", response.secure_url);

    // Remove the local file
    fs.unlinkSync(localFilePath);

    return response.secure_url;
  } catch (error) {
    console.log("Cloudinary upload error:", error);
    
    // Attempt to remove the local file in case of error
    try {
      if (fs.existsSync(localFilePath)) {
        fs.unlinkSync(localFilePath);
      }
    } catch (unlinkError) {
      console.log("Error removing local file:", unlinkError);
    }

    return null;
  }
};

export { uploadOnCloudinary };
