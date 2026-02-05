// const NoticeBoard = () => {
//   return (
//     <div className="w-full bg-[#f0faff]  py-12 px-4 md:px-4 lg:px-10">
//       {/* Banner Container */}
//       <div className="max-w-7xl mx-auto relative h-screen aspect-[21/9] md:aspect-[3/1] bg-[#ccd5e0] overflow-hidden shadow-sm">
//         {/* Stylized Mountain/Hill Shapes */}
//         <div className="absolute bottom-0 left-[-10%] w-[70%] h-[80%] bg-[#f8fafc] rounded-[100%] translate-y-1/2"></div>
//         <div className="absolute bottom-0 right-[-10%] w-[75%] h-[90%] bg-[#f1f5f9] rounded-[100%] translate-y-1/3"></div>

//         {/* Stylized Sun/Moon */}
//         <div className="absolute top-[30%] left-[25%] w-12 h-12 md:w-20 md:h-20 bg-[#f8fafc] rounded-full opacity-80"></div>

//         {/* Optional Overlay Text or Content can be placed here */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           {/* <h1 className="text-4xl font-bold text-slate-700">Your Title Here</h1> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NoticeBoard;

import React, { useRef, useState } from "react";
import axios from "axios";

const NoticeBoard = () => {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState("");

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Preview instantly
    setSelectedImage(URL.createObjectURL(file));

    // Upload to backend
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post("http://localhost:5000/api/upload", formData);
      setUploadedUrl(res.data.imageUrl);
      alert("Image saved successfully!");
    } catch (error) {
      console.log(error);
      alert("Upload failed!");
    }
  };

  return (
    <div className="w-full bg-[#f0faff] py-12 px-4 md:px-10 lg:px-10">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      <div
        onClick={handleClick}
        className="max-w-7xl mx-auto h-screen bg-[#ccd5e0] overflow-hidden shadow-sm cursor-pointer flex items-center justify-center"
      >
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Uploaded"
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <h2 className="text-2xl font-bold text-slate-700">
            Click to Upload Notice Image
          </h2>
        )}
      </div>

      {/* Show Uploaded URL */}
      {uploadedUrl && (
        <p className="mt-5 text-center text-green-600 font-semibold">
          Saved URL: {uploadedUrl}
        </p>
      )}
    </div>
  );
};

export default NoticeBoard;
