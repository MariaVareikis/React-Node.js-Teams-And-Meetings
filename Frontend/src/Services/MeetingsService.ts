import axios from "axios";
import MeetingModel from "../Models/MeetingModel";
import appConfig from "../Utils/Config";

class MeetingsService {

    public async getAllMeetingsByTeam(teamId: number): Promise<MeetingModel[]> {
        // Sends a GET request to the meetings URL with the provided teamId
        const response = await axios.get<MeetingModel[]>(appConfig.meetingsUrl + teamId);

        const meetings = response.data; // Extracts the meetings data from the response

        return meetings; // Returns the retrieved meetings
    }

    public async addMeeting(meeting: MeetingModel): Promise<MeetingModel> {
        // Sends a POST request to the meetings URL with the provided meeting data
        const response = await axios.post<MeetingModel>(appConfig.meetingsUrl, meeting);

        const addedMeeting = response.data; // Extracts the added meeting data from the response

        return addedMeeting; // Returns the added meeting
    }
}

const meetingsService = new MeetingsService(); // Creates an instance of the MeetingsService class

export default meetingsService; // Exports the meetingsService instance
