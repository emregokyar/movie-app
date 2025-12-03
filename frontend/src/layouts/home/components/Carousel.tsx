import _1984 from "../../../assets/books/1984.jpg";
import { FeaturedBook } from "./FeaturedBook";
import { useEffect, useState } from "react";
import { BookModel } from "../../../models/BookModel";

export const Carousel = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const baseUrl: string = "http://localhost:8080/books";
      const response = await fetch(baseUrl);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseJson = await response.json();
      const loadedBooks: BookModel[] = [];
      for (const key in responseJson) {
        loadedBooks.push(
          new BookModel(
            responseJson[key].id,
            responseJson[key].title,
            responseJson[key].author,
            responseJson[key].description,
            responseJson[key].copies,
            responseJson[key].copiesAvailable,
            responseJson[key].category,
            responseJson[key].img
          )
        );
      }
      setBooks(loadedBooks);
      setIsLoading(false);
    };

    fetchBooks().catch((error: Error) => {
      setError(error.message);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="container m-5 text-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container m-5 text-center">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <>
      <div className=" mt-5 mb-5" style={{ height: 550, color: "grey" }}>
        <div className="homepage-carousel-title pt-3">
          <h2 className="text-center fw-bold">
            Top Picks for Your Next Great Read
          </h2>
        </div>
        <div
          id="carouselExampleControls"
          className="carousel carousel-dark slide mt-5 d-none d-lg-block"
          data-bs-interval="false"
        >
          {/*Desktop*/}
          <div className="carousel-inner">
            <div className="carousel-item justify-content-center">
              <div className="row d-flex justify-content-center align-items-center">
                {books.slice(0, 3).map((book) => (
                  <FeaturedBook book={book} key={book.id} />
                ))}
              </div>
            </div>

            <div className="carousel-item justify-content-center">
              <div className="row d-flex justify-content-center align-items-center">
                {books.slice(3, 6).map((book) => (
                  <FeaturedBook book={book} key={book.id} />
                ))}
              </div>
            </div>

            <div className="carousel-item justify-content-center active">
              <div className="row d-flex justify-content-center align-items-center">
                {books.slice(6, 9).map((book) => (
                  <FeaturedBook book={book} key={book.id} />
                ))}
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span aria-hidden="false">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="grey"
                className="bi bi-chevron-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                />
              </svg>
            </span>
          </button>

          <button
            className="carousel-control-next text-white"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span aria-hidden="false">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="grey"
                className="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                />
              </svg>
            </span>
          </button>
        </div>

        {/*Mobile*/}
        <div className="d-lg-none mt-3">
          <div className="row d-flex justify-content-center align-item-center">
            <FeaturedBook book={books[1]} key={books[1].id} />
          </div>
        </div>

        <div className="homepage-coursel-title d-flex justify-content-center">
          <a
            href=""
            className="btn btn-lg d-flex flex-column justify-content-center align-items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="grey"
              className="bi bi-plus-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};
