
module.exports.getTodaysDate = function(separator) {
    var separatorText = "-";
    if (separator) {
        separatorText = separator;
    }
	var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!

    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
    return yyyy + separatorText + mm + separatorText + dd;
}

module.exports.getTomorrowDate = function(separator) {
    var separatorText = "-";
    if (separator) {
        separatorText = separator;
    }
	var today = new Date();
    var dd = today.getDate() + 1;
    var mm = today.getMonth()+1; //January is 0!

    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
    return yyyy + separatorText + mm + separatorText + dd;
}