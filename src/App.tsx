import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";


import 'bootstrap/dist/css/bootstrap.min.css';
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
      </Routes>
    </BrowserRouter>
    <Footer />
  </>);
}

export default App;