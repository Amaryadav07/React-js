import { BrowserRouter, Routes,Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import NopageFound from "./pages/nopagefound";



const App=()=>{
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NopageFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
}
export default App;