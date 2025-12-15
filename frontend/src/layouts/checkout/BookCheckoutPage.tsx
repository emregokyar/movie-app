import { useState, useEffect } from "react";
import { BookModel } from "../../models/BookModel";
import { SpinnerLoading } from "../utils/SpinnerLoading";
import _1984 from "../../assets/books/1984.jpg";

export const BookCheckoutPage = () => {
  const [book, setBook] = useState<BookModel>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const bookId = window.location.pathname.split("/")[2];

  useEffect(() => {
    const fetchBook = async () => {
      const baseUrl: string = `http://localhost:8080/books/${bookId}`;
      const response = await fetch(baseUrl);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseJson = await response.json();

      const loadedBook: BookModel = new BookModel(
        responseJson.id,
        responseJson.title,
        responseJson.author,
        responseJson.description,
        responseJson.copies,
        responseJson.copiesAvailable,
        responseJson.category,
        responseJson.img
      );

      setBook(loadedBook);
      setIsLoading(false);
    };

    fetchBook().catch((error: Error) => {
      setError(error.message);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <SpinnerLoading />;
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
      <div>
        <div className="container d-none d-lg-block">
          <div className="row mt-5">
            <div className="col-sm-2 col-md-2">
              {
                <img
                  src={book?.img ? book?.img : _1984}
                  width={"350"}
                  height={"500"}
                  alt="Book"
                  style={{ objectFit: "cover" }}
                  className="rounded-3 border"
                />
              }
            </div>

            <div className="col-4 col-md-4 container">
              <div className="ml-2">
                <h2 style={{ color: "gray" }}>{book?.title}</h2>
                <h5 className="text-secondary">{book?.author}</h5>
                <p className="lead" style={{ color: "gray" }}>
                  {book?.description}
                </p>
              </div>
            </div>
          </div>
          <hr style={{ borderColor: "gray" }} />
        </div>
        <div className="container d-lg-none mt-5">
          <div className="d-flex justify-content-center align-items-center">
            {
              <img
                src={book?.img ? book?.img : _1984}
                width={"270"}
                height={"410"}
                alt="Book"
                style={{ objectFit: "cover" }}
                className="rounded-3 border"
              />
            }
          </div>

          <div className="mt-4">
            <div className="ml-2">
              <h2 style={{ color: "gray" }}>{book?.title}</h2>
              <h5 className="text-secondary">{book?.author}</h5>
              <p className="lead" style={{ color: "gray" }}>
                {book?.description}
              </p>
            </div>
          </div>
          <hr style={{ borderColor: "gray" }} />
        </div>
      </div>
    </>
  );
};
