import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AddList, ListPage, EditList } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListPage />,
  },
  {
    path: "/add-list",
    element: <AddList />,
  },
  {
    path: "/edit/:id",
    element: <EditList />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
