import Joi from "joi";

class MeetingModel {

    public meetingId: number;
    public teamId: number;
    public startOfMeeting: string;
    public endOfMeeting: string;
    public description: string;
    public meetingRoom: string;

    public constructor(meeting: MeetingModel) {
        // Assigns properties from the provided meeting object to the current instance
        this.meetingId = meeting.meetingId;
        this.teamId = meeting.teamId;
        this.startOfMeeting = meeting.startOfMeeting;
        this.endOfMeeting = meeting.endOfMeeting;
        this.description = meeting.description;
        this.meetingRoom = meeting.meetingRoom;
    }

    // Validation:
    // Defines a validation schema using the Joi library
    private static ValidationSchema = Joi.object({
        meetingId: Joi.number().optional().positive().integer(),
        teamId: Joi.number().optional().positive().integer(),
        startOfMeeting: Joi.string().required().min(14).max(30),
        endOfMeeting: Joi.string().required().min(14).max(30),
        description: Joi.string().required().min(10).max(100),
        meetingRoom: Joi.number().optional().positive().integer()
    });

    // Validates the current instance against the validation schema
    public validate(): string {
        const result = MeetingModel.ValidationSchema.validate(this);
        return result.error?.message; // Returns the validation error message, if any (undefined if no error)
    }

}

export default MeetingModel;
