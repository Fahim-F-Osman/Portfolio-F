import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      {routes.map(({ path, element: Element }) => (
        <Route
          key={path}
          path={path}
          element={ <Element /> }
        />
      ))}
    </Routes>
    </BrowserRouter>
  )
}
