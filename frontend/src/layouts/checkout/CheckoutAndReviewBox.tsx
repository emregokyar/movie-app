import type React from "react";
import type { BookModel } from "../../models/BookModel";
import { Link } from "react-router-dom";

export const CheckoutAndReviewBox: React.FC<{
  book: BookModel | undefined;
  mobile: boolean;
}> = (props) => {
  return (
    <>
      <div
        className={
          props.mobile ? "card d-lex mt-5" : "card col-3 container d-flex mb-5"
        }
      >
        <div className="card-body container">
          <div className="mt-3">
            <p>
              <b>0/5 </b>
              boooks checked out.
            </p>
            <hr style={{ borderColor: "gray" }} />
            {props.book &&
            props.book.copiesAvailable &&
            props.book.copiesAvailable > 0 ? (
              <h4 className="text-secondary">Available</h4>
            ) : (
              <h4 className="text-danger">Wait List</h4>
            )}

            <div className="row">
              <p className="lead col-6">
                <b>{props.book?.copies} </b>
                copies
              </p>

              <p className="lead col-6">
                <b>{props.book?.copiesAvailable} </b>
                avaliable
              </p>
            </div>
          </div>

          <Link to={""} className="btn btn-dark">
            Sign in
          </Link>
          <hr style={{ borderColor: "gray" }} />
          <p className="mt-3">
            This number can be changed until order has been complete.
          </p>
          <p>Sing in to leave a review.</p>
        </div>
      </div>
    </>
  );
};
