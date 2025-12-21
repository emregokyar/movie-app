import type React from "react";
import _1984 from "../../../assets/books/1984.jpg";
import type { BookModel } from "../../../models/BookModel";
import { Link } from "react-router-dom";

export const FeaturedBook: React.FC<{ book: BookModel }> = (props) => {
  return (
    <>
      <div className="col-xs-6 col-sm-6 col-md-3 mb-3">
        <div className="text-center" style={{ color: "grey" }}>
          {props.book.img ? (
            <img
              className="rounded-3 border"
              src={props.book.img}
              alt="Book Poster"
              style={{
                width: "16rem",
                height: "25rem",
                objectFit: "cover",
              }}
            />
          ) : (
            <img
              className="rounded-3 border"
              src={_1984}
              alt="Book Poster"
              style={{
                width: "16rem",
                height: "25rem",
                objectFit: "cover",
              }}
            />
          )}
          <h4 className="mt-2 fw-bold">{props.book.title}</h4>
          <p>{props.book.author}</p>
          <Link
            href=""
            className="btn border-bottom rounded-0"
            style={{ color: "grey" }}
            to={`/checkout/${props.book.id}`}
          >
            RESERVE
          </Link>
        </div>
      </div>
    </>
  );
};
