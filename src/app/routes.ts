import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Services } from "./pages/Services";
import { StartProject } from "./pages/StartProject";
import { CustomerPortal } from "./pages/CustomerPortal";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "projects", Component: Projects },
      { path: "services", Component: Services },
      { path: "start-project", Component: StartProject },
      { path: "customer-portal", Component: CustomerPortal },
    ],
  },
]);
