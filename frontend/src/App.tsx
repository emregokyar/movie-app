import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { Footer } from "./layouts/footer/Footer";
import { Navbar } from "./layouts/header/Navbar";
import { HomePage } from "./layouts/home/HomePage";
import { SearchBooksPage } from "./layouts/search/SearchBookPage";
import { BookCheckoutPage } from "./layouts/checkout/BookCheckoutPage";

export const App = () => {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />

        <div className="flex-grow-1">
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route exact path="/home">
              <HomePage />
            </Route>
            <Route path="/search">
              <SearchBooksPage />
            </Route>

            <Route path={"/checkout/:bookId"}>
              <BookCheckoutPage />
            </Route>
          </Switch>
        </div>

        <Footer />
      </div>
    </>
  );
};
