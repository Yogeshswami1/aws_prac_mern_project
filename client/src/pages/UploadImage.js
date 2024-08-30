// src/pages/UploadImage.js
import React, { useState } from 'react';
import { storage, ref, uploadBytes, getDownloadURL } from '../firebase'; // Adjust path if necessary

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("No file selected.");
      return;
    }
    
    setUploading(true);
    setError(null);

    const storageRef = ref(storage, `images/${selectedFile.name}`);

    try {
      await uploadBytes(storageRef, selectedFile);
      const url = await getDownloadURL(storageRef);
      setImageUrl(url);
      setSelectedFile(null);
    } catch (err) {
      setError("Failed to upload image.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {imageUrl && <img src={imageUrl} alt="Uploaded Preview" style={{ width: "200px" }} />}
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

export default UploadImage;
