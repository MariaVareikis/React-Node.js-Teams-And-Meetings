import MeetingModel from "../../../Models/MeetingModel";
import "./MeetingCard.css";

interface MeetingCardProps {
    meeting: MeetingModel;
}

function MeetingCard(props: MeetingCardProps): JSX.Element {
    return (
        <div className="MeetingCard">
            <div className="Container">
                <span>Start of meeting: {props.meeting.startOfMeeting}</span>
                <br />
                <span>End of meeting: {props.meeting.endOfMeeting}</span>
                <br />
                <span>Description: {props.meeting.description}</span>
                <br />
                <span>Meeting room: {props.meeting.meetingRoom}</span>
            </div>
        </div>
    );
}

export default MeetingCard;
