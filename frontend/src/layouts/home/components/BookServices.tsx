import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export const BookServices = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <div
        className="container my-5"
        style={{ color: "grey", borderColor: "grey !important" }}
      >
        <div className="row p-4 aling-items-center border-bottom border-top shadow-lg">
          <div className="col-lg-7 p-3">
            <h1 className="display-4 fw-bold">
              Can't find what you are looking for?
            </h1>
            <p className="lead my-5">
              If the title you're searching for isn’t in our library, feel free
              to reach out to our library admins directly — they’ll be happy to
              help!
            </p>
            <div className="d-grid gap-2 justify-content-md-start mb-4 mb-lg-3">
              {isAuthenticated ? (
                <>
                  <Link
                    to={"/explore"}
                    className="btn btn-lg rounded-0 border-bottom"
                    style={{ color: "grey" }}
                  >
                    Explore top books
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to={"/login"}
                    className="btn btn-lg rounded-0 border-bottom"
                    style={{ color: "grey" }}
                  >
                    Sing up
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 shadow-lg lost-image rounded-3"></div>
        </div>
      </div>
    </>
  );
};
