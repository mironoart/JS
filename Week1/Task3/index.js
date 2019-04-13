/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */

var HOURS_PER_DAY = 24;
var MINUTES_PER_HOUR = 60;

module.exports = function(hours, minutes, interval) {

    minutes += interval;
    hours += Math.floor(minutes / MINUTES_PER_HOUR);

    minutes %= MINUTES_PER_HOUR;
    hours %= HOURS_PER_DAY;

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

		return hours + ':' + minutes;
	
}

/* 
if (hours <= 23 && hours >= 0 && minutes <= 59 && minutes >= 0) {
	var temp = minutes + interval
	var newHours
	var newMinutes

	if (temp >= 60) {
		newHours = hours + Math.floor(temp / 60)
		newMinutes = temp - Math.floor(temp / 60) * 60
		if (newHours >= 24) {
			newHours = newHours - Math.floor(newHours / 24) * 24
		}
	} else {
		newHours = hours
		newMinutes = temp
	}

	newHours = (newHours / 100)
		.toFixed(2)
		.slice(2, 4)
		.toString()
	newMinutes = (newMinutes / 100)
		.toFixed(2)
		.slice(2, 4)
		.toString()

	return newHours + ':' + newMinutes
} else {
	return false
}
 */