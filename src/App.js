import Home from "./pages/home/Home"
import List from "./pages/list/List"
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Hotel from "./pages/hotel/Hotel";
function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/hotels" element={<List></List>}></Route>
        <Route path="/hotels/:id" element={<Hotel></Hotel>}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
