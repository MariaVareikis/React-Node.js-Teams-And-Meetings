import express, { Request, Response, NextFunction } from "express";
import MeetingModel from "../4-models/meeting-model";
import meetingsLogic from "../5-logic/meetings-logic";

const router = express.Router(); // Capital R

// GET http://localhost:3001/api/meetings/:teamId
router.get("/meetings/:teamId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const teamId = +request.params.teamId; // Extracts the teamId from the request parameters and converts it to a number
        const meeting = await meetingsLogic.getAllMeetingsByTeam(teamId); // Calls the meetingsLogic to retrieve all meetings for the specified teamId
        response.json(meeting); // Sends the retrieved meetings as JSON response
    } catch (err: any) {
        next(err); // Passes any caught error to the next error-handling middleware or default error handler
    }
});

// POST http://localhost:3001/api/meetings
router.post("/meetings/", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const meeting = new MeetingModel(request.body); // Creates a new MeetingModel instance using the request body
        const addedMeeting = await meetingsLogic.addMeeting(meeting); // Calls the meetingsLogic to add the meeting to the database
        response.status(201).json(addedMeeting); // Sends the added meeting as JSON response with HTTP status code 201 (Created)
    } catch (err: any) {
        next(err); // Passes any caught error to the next error-handling middleware or default error handler
    }
});

export default router;
