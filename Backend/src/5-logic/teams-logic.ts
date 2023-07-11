import dal from "../2-utils/dal";
import TeamModel from "../4-models/team-model";

async function getAllTeams(): Promise<TeamModel[]> {
    // SQL query to retrieve all teams
    const sql = `SELECT * FROM teams`;

    // Execute the SQL query using the DAL (Data Access Layer) utility
    const teams = await dal.execute(sql);

    // Return the retrieved teams
    return teams;
}

export default {
    getAllTeams,

};