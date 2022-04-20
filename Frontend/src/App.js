import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./component/Header";
import Footer from "./component/Footer";
import Signin from "./component/Signin";
import Taders from "./component/Taders";
import Profile from "./component/Profile";
import HomePage from "./component/HomePage";
import Trending from "./component/Trending";
import Exchanges from "./component/Exchanges";
import CoinDetails from "./component/CoinDetails";
import Registration from "./component/Registration";
import GlobalStyles from "./component/GlobalStyles";


import {ReviewContext} from "./context/ReviewContext";

const App = () => {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <GlobalStyles />
          <div>
            <Routes>
              <Route exact="true" path="/" element={<HomePage />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/registration" element={<Registration />} />

              {/* This route is for testing purposes only */}
              {/* <Route path="/ReviewContext" element={<ReviewContext />} /> */}

              <Route path="/taders" element={<Taders />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/:coinid" element={<CoinDetails />} />
            </Routes>
          </div>
          <Footer/>
        </Router>
      </div>
    </>
  );
}

export default App;
