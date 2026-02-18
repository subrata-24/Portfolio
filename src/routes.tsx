import type { RouteObject } from "react-router-dom";

import App from "./App";
import ProjectDetails from "./pages/ProjectDetails";
import CompetitiveJourney from "./pages/CompetitiveJourney";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "projects/:id",
        element: <ProjectDetails />,
      },
      {
        path: "competitive-journey",
        element: <CompetitiveJourney />,
      },
    ],
  },
];
