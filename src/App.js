import React, { useEffect, useState } from "react";
import axios from "axios";
import Images from "./components/Images";
import Pagination from "./components/Pagination";
import "./App.css";

const App = () => {
  const [images, setImage] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [imagePerPage] = useState(16);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/albums/1/photos"
      );
      setLoading(false);
      setImage(response.data);
    };
    fetchImage();
  }, []);

  const indexOfLastImage = currentPage * imagePerPage;
  const indexOfFirstImage = indexOfLastImage - imagePerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const pageCount = Math.ceil(images.length / imagePerPage);

  return (
    <div className="conteiner text-center my-3">
      <h1 className="display-5">Image Gallery</h1>
      <Images images={currentImages} loading={loading} />
      <Pagination
        pageCount={pageCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default App;
