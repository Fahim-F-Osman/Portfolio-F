import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import Footer from "./components/Footer/Footer";

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
