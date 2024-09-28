export var getFormattedDate = function (date) {
    return new Intl.DateTimeFormat("en-ng", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(date));
};
