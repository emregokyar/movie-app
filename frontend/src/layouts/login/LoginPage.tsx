import { useAuth0 } from "@auth0/auth0-react";

export const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center mt-5 pt-5">
        <button
          className="btn border rounded-3 btn-lg w-50"
          style={{ color: "grey" }}
          onClick={() => loginWithRedirect()}
        >
          Sing up
        </button>
      </div>
    </>
  );
};
