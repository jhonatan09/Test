import React, { useContext } from "react";
import HomePage from "../../pages/HomePage";
import { DataContext } from "../../store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "../../pages/ProductPage";

const Main = () => {
    const {
     data
      } = useContext(DataContext);

      console.log(data)
    return (
        <>
         <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:name" element={<ProductPage />} />
            </Routes>
        </Router>

        </>
    )
}

export default Main;