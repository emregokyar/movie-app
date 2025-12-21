import { useAuth0 } from "@auth0/auth0-react";

export const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center mt-5 pt-5">
        <button
          className="btn border-bottom rounded-0 btn-lg"
          style={{ color: "grey" }}
          onClick={() => loginWithRedirect()}
        >
          Log in
        </button>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          fill="grey"
          className="bi bi-arrow-up-short"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"
          />
        </svg>
      </div>
    </>
  );
};
