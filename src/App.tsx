import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";


import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page1 from "./components/Pages/Page1";
import Page2 from "./components/Pages/Page2";


function App() {
  return (<>
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
  </>);
}

export default App;