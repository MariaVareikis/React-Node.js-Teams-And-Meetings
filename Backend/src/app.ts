import express from "express";
import cors from "cors";
import appConfig from "./2-utils/app-config";
import catchAll from "./3-middleware/catch-all";
import routeNotFound from "./3-middleware/route-not-found";
import teamController from "./6-controllers/teams-controller";
import meetingsController from "./6-controllers/meetings-controller";

const server = express();

server.use(cors()); // Enable CORS for cross-origin requests
server.use(express.json()); // Parse JSON request bodies
server.use("/api", teamController); // Mount the teamController middleware at the /api/teams route
server.use("/api", meetingsController); // Mount the meetingsController middleware at the /api/meetings route
server.use("*", routeNotFound); // Middleware to handle route not found errors for all routes
server.use(catchAll); // Middleware to handle other unhandled errors

server.listen(appConfig.port, () => console.log(`Listening on http://localhost:${appConfig.port}`));
