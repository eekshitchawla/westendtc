import "./App.css";
import Body from "./components/Body/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Calculator from "./components/Calculator/Calculator";
import Navbar from "./components/Navbar/Navbar";
import AddMember from "./components/admin/AddMember/AddMember";
import RemoveMember from "./components/admin/RemoveMember/RemoveMember";
import EditMember from "./components/admin/EditMember/EditMember";
import Login from "./components/Login/Login";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/calculator",
      element: <Calculator />,
    },
    {
      path: "/add-member",
      element: <AddMember />,
    },
    {
      path: "/remove-member",
      element: <RemoveMember />,
    },
    {
      path: "/edit-member",
      element: <EditMember />,
    },
    {
      path: "/login",
      element: <Login />,
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
