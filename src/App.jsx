import { Toaster } from "react-hot-toast";
import { AppRoutes } from "./routes/routes";
import { GlobalStyle } from "./styles/global";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Toaster position="bottom-center" />
      <AppRoutes />
    </>
  );
};
