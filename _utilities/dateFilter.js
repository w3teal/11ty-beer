const { DateTime } = require("luxon");

function dateFilter(dateObj) {
    return DateTime.fromJSDate(dateObj, { zone: "utc" })
        .setLocale("en")
        .toLocaleString({ day: "numeric", month: "long", year: "numeric" });
}

module.exports = dateFilter;
