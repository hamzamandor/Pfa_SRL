import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SaveBook.css";

const Books = ({
  id,
  cover_img,
  title,
  author,
  edition_count,
  first_publish_year,
}) => {
  const [isBookSaved, setIsBookSaved] = React.useState(false);

  const handleSaveButtonClick = async () => {
    try {
      const response = await axios.post("http://localhost:3001/savebook", {
        id,
        cover_img,
        title,
        author,
        edition_count,
        first_publish_year,
      }, {
        withCredentials: true // Ensure credentials are sent with the request
      });

      if (response.status === 200) {
        setIsBookSaved(true);
      } else {
        console.log("Failed to save book:", response.data.message);
      }
    } catch (error) {
      console.error("Error during save book request:", error);
    }
  };

  return (
    <div className="book-item flex flex-column flex-sb">
      <div className="book-item-img">
        <img src={cover_img} alt="cover" />
      </div>
      <div className="book-item-info text-center">
        <Link to={`/bookUser/${id}`}>
          <div className="book-item-info-item title fw-7 fs-18">
            <span>{title}</span>
          </div>
        </Link>

        <div className="book-item-info-item author fs-15">
          <span className="text-capitalize fw-7">Author: </span>
          <span>{author ? author.join(", ") : "Unknown"}</span>
        </div>

        <div className="book-item-info-item edition-count fs-15">
          <span className="text-capitalize fw-7">Total Editions: </span>
          <span>{edition_count}</span>
        </div>

        <div className="book-item-info-item publish-year fs-15">
          <span className="text-capitalize fw-7">First Publish Year: </span>
          <span>{first_publish_year}</span>
        </div>
        <button
          className="save-button"
          onClick={handleSaveButtonClick}
          disabled={isBookSaved}
        >
          {isBookSaved ? "Saved" : "Save"}
        </button>
      </div>
    </div>
  );
};


export default Books;
