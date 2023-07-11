import express, { Request, Response, NextFunction } from "express";
import teamsLogic from "../5-logic/teams-logic";

const router = express.Router(); // Capital R

// GET http://localhost:3001/api/teams
router.get("/teams", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const teams = await teamsLogic.getAllTeams(); // Calls the teamsLogic to retrieve all teams
        response.json(teams); // Sends the retrieved teams as JSON response
    } catch (err: any) {
        next(err); // Passes any caught error to the next error-handling middleware or default error handler
    }
});

export default router;
