import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./component/App.css";
import NavBar from "./component/NavBar";
import Carousel from "./component/Carousel";
import Box_1 from "./component/Box_1";
import Box_2 from "./component/Box_2";
import Box_3 from "./component/Box_3";
import Box_4 from "./component/Box_4";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Carousel />
      <Box_1 />
      <Box_2 />
      <Box_3 />
      <Box_4 />
      <Footer />
    </>
  );
}

export default App;
