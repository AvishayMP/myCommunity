import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";


import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page1 from "./components/Pages/Page1";
import Page2 from "./components/Pages/Page2";
import { useEffect } from 'react';
import { MyProvider } from "./components/ContextProvider";

function App() {
  useEffect(() => {
    document.title = "מוסדות אהבת ישראל";
  })
  return (<>
    <MyProvider>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="*" element={<>404 Page not found</>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </MyProvider>
  </>);
}

export default App;