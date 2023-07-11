import axios from "axios";
import TeamModel from "../Models/TeamModel";
import appConfig from "../Utils/Config";

class TeamService {

    public async getAllTeams(): Promise<TeamModel[]> {
        // Sends a GET request to the teams URL
        const response = await axios.get<TeamModel[]>(appConfig.teamsUrl);

        const teams = response.data; // Extracts the teams data from the response

        return teams; // Returns the retrieved teams
    }

}

const teamService = new TeamService(); // Creates an instance of the TeamService class

export default teamService; // Exports the teamService instance
