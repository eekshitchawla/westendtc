import "./App.css";
import Body from "./components/Body/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Calculator from "./components/Calculator/Calculator";
import Navbar from "./components/Navbar/Navbar";
import AddMember from "./components/admin/AddMember/AddMember";
import RemoveMember from "./components/admin/RemoveMember/RemoveMember";
import EditMember from "./components/admin/EditMember/EditMember";
import Login from "./components/Login/Login";
import Deposits from "./components/Deposits/Deposits";
import Admin from "./components/admin/admin";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/calculator",
      element: <Calculator />,
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/deposits",
      element: <Deposits />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
    {
      path: "/admin/add-member",
      element: <AddMember />,
    },
    {
      path: "/admin/remove-member",
      element: <RemoveMember />,
    },
    {
      path: "/admin/edit-member",
      element: <EditMember />,
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
