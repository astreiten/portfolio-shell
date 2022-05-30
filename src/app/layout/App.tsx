import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "../features/landing/Landing";
import { Microfrontend } from "../microfrontend/Microfrontend";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Landing></Landing>} />
        <Route
          path={"/me"}
          element={
            <Microfrontend
              //host={"http://localhost:3001"}
              host={"https://portfolio-a5684.web.app"}
              name={"Me"}
              window={window}
              document={document}
            />
          }
        />
        <Route path={"/notfound"} element={<p>NOT FOUND</p>} />
      </Routes>
    </BrowserRouter>
  );
};
