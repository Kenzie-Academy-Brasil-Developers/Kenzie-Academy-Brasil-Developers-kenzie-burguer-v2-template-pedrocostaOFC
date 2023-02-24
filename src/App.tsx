import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./styles/globalStyles";
import { MajorRoute } from "./routes";
import { ResetStyle } from "./styles/resetCss";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <ToastContainer />
      <MajorRoute />
    </>
  );
};

export default App;
