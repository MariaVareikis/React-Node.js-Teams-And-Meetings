class Config {
    // Defines the URLs for meetings and teams
    public meetingsUrl = "http://localhost:3001/api/meetings/";
    public teamsUrl = "http://localhost:3001/api/teams";
}

const appConfig = new Config(); // Creates a singleton instance of the Config class

export default appConfig; // Exports the appConfig instance
