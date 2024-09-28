export var dateFormatter = function (dateStr) {
    var date = new Date(dateStr);
    var formattedDate = date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
    return formattedDate;
};
