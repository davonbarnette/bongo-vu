let baseUrl = "https://api.jikan.moe/v4";

class JikanAPIRoutes {

    static SCHEDULES = "schedules";

    static getScheduleRoute(day) {
        return `${baseUrl}/${JikanAPIRoutes.SCHEDULES}/${day}`
    }
}

module.exports = JikanAPIRoutes;