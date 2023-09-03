import "./App.css";
import Body from "./components/Body/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Loan from "./components/Loan/Loan";
import Calculator from "./components/Calculator/Calculator";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/loan",
      element: <Loan />,
    },
    {
      path: "/calculator",
      element: <Calculator />,
    },
  ]);
  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
