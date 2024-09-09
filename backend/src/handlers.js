import moment from "moment-timezone";

class DateHandlers {
  getCurrentDate(req, res) {
    try {
        let timezone = req.query.timezone ?? "UTC";
        let format = req.query.format ?? "YYYY-MM-DD HH:mm:ss";
        const currDate = moment().tz(timezone).format(format);
        res.json({currDate});
    } catch (e) {
        console.error(e);
        res.status(500).json({error: e});
    }
  }
}

export default new DateHandlers()