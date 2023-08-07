import { AllRoutes } from "./Routes/AllRoutes";
import { Box } from "@chakra-ui/react";
import { Navbar } from "./Components/Navbar/Navbar";

import { Footer } from "./Home/Footer";
import "./App.css";
function App() {
  return (
    <>
      <Box className="font-face-pt">
        <Navbar />
        <AllRoutes />
        <Footer />
      </Box>
    </>
  );
}

export default App;
