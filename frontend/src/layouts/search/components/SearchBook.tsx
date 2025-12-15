import type React from "react";
import type { BookModel } from "../../../models/BookModel";
import { Link } from "react-router-dom";

export const SearchBook: React.FC<{ book: BookModel }> = (props) => {
  return (
    <>
      <div
        className="card my-3 shadow p-3 pg-body rounded"
        style={{ backgroundColor: "grey" }}
      >
        <div className="row g-0">
          <div className="col-md-2 ">
            <div className="d-none d-lg-block">
              <img
                src={
                  props.book.img
                    ? props.book.img
                    : "../../../assets/books/1984.jpg"
                }
                className="img-fluid rounded-3 border"
                alt="Book Poster"
                style={{ height: "100%", objectFit: "cover" }}
              />
            </div>

            <div className="d-lg-none d-flex justify-content-center">
              <img
                src={
                  props.book.img
                    ? props.book.img
                    : "../../../assets/books/1984.jpg"
                }
                className="img-fluid rounded-3 border"
                alt="Book Poster"
                style={{ height: "20rem", width: "12rem", objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{props.book.author}</h5>
              <h4>{props.book.title}</h4>
              <p className="card-text">{props.book.description}</p>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <Link
              to={`/checkout/${props.book.id}`}
              className="btn btn-md border-bottom rounded-0"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
