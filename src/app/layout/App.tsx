import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Microfrontend } from "../microfrontend/Microfrontend";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<p>HOME</p>} />
        <Route
          path={"/me"}
          element={
            <Microfrontend
              host={"http://localhost:3001"}
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
