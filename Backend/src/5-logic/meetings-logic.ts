import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import { ResourceNotFoundErrorModel } from "../4-models/error-models";
import MeetingModel from "../4-models/meeting-model";

async function getAllMeetingsByTeam(teamId: number): Promise<MeetingModel[]> {
    // SQL query to retrieve all meetings for a specific team
    const sql = `SELECT M.meetingId,
                M.teamId,
                DATE_FORMAT(startOfMeeting, '%d/%m/%Y %T') AS startOfMeeting,
                DATE_FORMAT(endOfMeeting, '%d/%m/%Y %T') AS endOfMeeting,
                M.description,
                M.meetingRoom,
                T.teamName         
                FROM meetings AS M
                JOIN teams AS T
                ON M.teamId = T.teamId
                WHERE M.teamId = ?`;

    // Execute the SQL query, passing the teamId as a parameter
    const meetings = await dal.execute(sql, [teamId]);

    // Extract first (and only) meeting
    const meeting = meetings[0];

    // If meeting does not exist, throw a resource not found error
    if (!meeting) throw new ResourceNotFoundErrorModel(teamId);

    // Return the retrieved meetings
    return meetings;
}

async function addMeeting(meeting: MeetingModel): Promise<MeetingModel> {
    // SQL query to insert a new meeting into the database
    const sql = `INSERT INTO meetings 
                VALUES(DEFAULT, ?, ?, ?, ?, ?)`;

    // Execute the SQL query, passing the meeting details as parameters
    const info: OkPacket = await dal.execute(sql, [
        meeting.teamId,
        meeting.startOfMeeting,
        meeting.endOfMeeting,
        meeting.description,
        meeting.meetingRoom
    ]);

    // Set the auto-incremented meetingId value back to the meeting object
    meeting.meetingId = info.insertId;

    // Return the updated meeting object
    return meeting;
}

export default {
    getAllMeetingsByTeam,
    addMeeting
};
