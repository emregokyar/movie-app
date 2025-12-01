import inter from "../../../assets/movie/peak.jpg";
import { FeaturedMovie } from "./FeaturedMovie";

export const Carousel = () => {
  return (
    <>
      <div
        className="container mt-5 mb-5"
        style={{ height: 550, color: "grey" }}
      >
        <div className="homepage-carousel-title pt-3">
          <h2 className="text-center fw-bold">
            Top Picks for Your Perfect Movie Night
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
                <FeaturedMovie />
              </div>
            </div>

            <div className="carousel-item active justify-content-center">
              <div className="row d-flex justify-content-center align-items-center">
                <FeaturedMovie />
              </div>
            </div>

            <div className="carousel-item justify-content-center">
              <div className="row d-flex justify-content-center align-items-center">
                <FeaturedMovie />
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
                width="60"
                height="60"
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
                width="60"
                height="60"
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
            <div className="text-center">
              <img
                className="rounded-3"
                src={inter}
                alt="Movie Poster"
                style={{
                  width: "20rem",
                  height: "30rem",
                  objectFit: "cover",
                }}
              />
              <h6 className="mt-2">
                <b>Intersellar</b>
              </h6>
              <p>Starring Matthew McConaughey</p>
              <a
                href=""
                className="btn rounded-0 border-bottom"
                style={{ color: "grey" }}
              >
                RESERVE
              </a>
            </div>
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
