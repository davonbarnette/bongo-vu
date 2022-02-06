const axios = require("axios");
const Logger = require("../../logger");
const JikanAPIRoutes = require("./JikanAPIRoutes");

class JikanV4API {

    static async getSchedules(day){
        try {
            let res = await axios.get(JikanAPIRoutes.getScheduleRoute(day));
            return res.data.data;
        } catch (e) {
            Logger.error("Failed to get schedules from Jikan API", e.message);
            return undefined;
        }
    }

}

module.exports = JikanV4API;