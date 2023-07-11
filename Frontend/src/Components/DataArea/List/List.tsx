import { useEffect, useState } from "react";
import MeetingModel from "../../../Models/MeetingModel";
import TeamModel from "../../../Models/TeamModel";
import meetingsService from "../../../Services/MeetingsService";
import teamService from "../../../Services/TeamsService";
import MeetingCard from "../MeetingCard/MeetingCard";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';

function List(): JSX.Element {

    const [teams, setTeams] = useState<TeamModel[]>([]);
    const [meetings, setMeetings] = useState<MeetingModel[]>([]);

    useEffect(() => {
        // Fetches all teams when the component mounts
        teamService.getAllTeams()
            .then(teams => setTeams(teams))
            .catch(err => alert(err.message))
    }, []);

    async function showTeams(event: SelectChangeEvent) {
        const value = +(event.target.value as string);
        // Retrieves all meetings for the selected team
        meetingsService.getAllMeetingsByTeam(value)
            .then(meetings => setMeetings(meetings))
            .catch(err => alert(err.message))
    }

    return (
        <div className="List">
            <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">Teams</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue="Select Team"
                    label="Teams"
                    onChange={showTeams}>
                    {teams.map(t =>
                        <MenuItem key={t.teamId} value={t.teamId}>
                            {t.teamName}
                        </MenuItem>
                    )}
                </Select>
            </FormControl>
            <br />
            {meetings.map(m => <MeetingCard key={m.meetingId} meeting={m} />)}
        </div>
    );
}

export default List;
