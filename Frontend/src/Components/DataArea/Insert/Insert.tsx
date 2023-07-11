import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import MeetingModel from "../../../Models/MeetingModel";
import TeamModel from "../../../Models/TeamModel";
import meetingsService from "../../../Services/MeetingsService";
import teamService from "../../../Services/TeamsService";
import "./Insert.css";

function Insert(): JSX.Element {

    const navigate = useNavigate();

    const [teams, setTeams] = useState<TeamModel[]>([]);

    const { register, handleSubmit } = useForm<MeetingModel>();

    useEffect(() => {
        // Fetches all teams when the component mounts
        teamService.getAllTeams()
            .then(teams => setTeams(teams))
            .catch(err => alert(err.message));
    }, []);

    async function send(meeting: MeetingModel) {
        const currentDateTime = new Date();
        const selectedStartDateTime = new Date(meeting.startOfMeeting);

        if (selectedStartDateTime < currentDateTime) {
            // Displays an error message if the selected start date is in the past
            return swal({
                title: "Start date can't be in the past!",
                icon: "error",
            });
        }

        try {
            // Adds the meeting using the meetingsService
            await meetingsService.addMeeting(meeting);
            swal({
                title: "Meeting has been added!",
                icon: "success"
            });
            navigate("/meetings"); // Navigates to the "/meetings" route
        } catch (err: any) {
            alert(err.message); // Displays an alert with the error message if an error occurs
        }
    }

    return (
        <div className="Insert">
            <h2>Add meeting</h2>
            <form onSubmit={handleSubmit(send)}>
                <label>Select Team: </label>
                <select defaultValue="" {...register("teamId")}>
                    <option disabled value="">Select Team</option>
                    {teams.map(t =>
                        <option key={t.teamId} value={t.teamId}>
                            {t.teamName}
                        </option>)}
                </select>
                <label>Start of meeting: </label>
                <input type="datetime-local" {...register("startOfMeeting")} required />
                <label>End of meeting: </label>
                <input type="datetime-local" {...register("endOfMeeting")} required />
                <label>Description: </label>
                <input type="text" {...register("description")} required min="0" max="100" />
                <label>Meeting room: </label>
                <input type="number" {...register("meetingRoom")} required min="1" max="5" />
                <button>Add</button>
            </form>
        </div>
    );
}

export default Insert;
