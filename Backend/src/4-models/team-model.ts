import Joi from "joi";

class TeamModel {

    public teamId: number;
    public teamName: string;

    public constructor(team: TeamModel) {
        // Assigns properties from the provided team object to the current instance
        this.teamId = team.teamId;
        this.teamName = team.teamName;
    }

    // Validation:
    // Defines a validation schema using the Joi library
    private static ValidationSchema = Joi.object({
        id: Joi.number().optional().positive().integer(),
        teamName: Joi.string().required().min(2).max(30)
    });

    // Validates the current instance against the validation schema
    public validate(): string {
        const result = TeamModel.ValidationSchema.validate(this);
        return result.error?.message; // Returns the validation error message, if any (undefined if no error)
    }

}

export default TeamModel;
