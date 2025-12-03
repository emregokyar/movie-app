export const Heroes = () => {
  return (
    <>
      <div className="pt-lg-5 container" style={{ color: "grey" }}>
        <div className="d-none d-lg-block pt-5 mt-5">
          <div className="row g-0 mt-5 ">
            <div className="col-sm-6 col-md-6 ">
              <div className="col-image-left rounded-3"></div>
            </div>

            <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
              <div className="ml-2">
                <h1>What've you been reading lately?</h1>
                <p className="lead">
                  We're excited to hear what's been on your reading list lately.
                  Whether you're exploring new genres or diving deeper into your
                  favorite topics, we'll help you discover books that perfectly
                  match your journey.
                </p>
                <a
                  className="btn btn-lg border-bottom rounded-0"
                  style={{ color: "grey" }}
                  href=""
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
              <div className="ml-2">
                <h1>Our Library Never Stops Growing!</h1>
                <p className="lead">
                  Check in often — our collection is constantly growing! We work
                  tirelessly to bring you the most accurate and up-to-date
                  selection of books. We're dedicated to curating high-quality
                  titles, and offering a rich reading experience will always be
                  our top priority.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="col-image-right rounded-3"></div>
            </div>
          </div>
        </div>

        {/* Mobile*/}
        <div className="d-lg-none mt-5 pt-5">
          <div className="container mt-5">
            <div className="m-2">
              <div className="col-image-left rounded-3"></div>
              <div className="mt-2">
                <h1>Share Your Recent Watchlist</h1>
                <p className="lead">
                  We’re excited to hear what’s been on your screen lately.
                  Whether you’re exploring new interests or deepening your
                  knowledge, we’ll help you discover content that fits your
                  journey perfectly.
                </p>
                <a
                  href=""
                  className="btn btn-lg border-bottom rounded-0"
                  style={{ color: "grey" }}
                >
                  Sing up
                </a>
              </div>
            </div>
            <div className="m-2">
              <div className="col-image-right rounded-3"></div>
              <div className="mt-2">
                <h1>Our Library Never Stops Growing!</h1>
                <p className="lead">
                  Check in often — our collection is constantly evolving! We
                  work tirelessly to bring you the most accurate and updated
                  movie selection possible. We’re dedicated to curating
                  high-quality films, and providing great content will always
                  remain our top priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
