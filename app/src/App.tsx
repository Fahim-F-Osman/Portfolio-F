import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import Footer from "./components/Footer/Footer";
import UtilityMenu from "./components/UtilityMenu/UtilityMenu";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      {routes.map(({ path, element: Element }) => (
        <Route
          key={path}
          path={path}
          element={ 
            <>
              <UtilityMenu />
              <Element /> 
              <Footer />
            </>
          }
        />
      ))}
    </Routes>
    </BrowserRouter>
  )
}
