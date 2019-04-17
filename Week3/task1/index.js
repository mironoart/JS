/**
 * @param {String} date
 * @returns {Object}
 */

// ИСПОЛЬЗУЙ setDATE(ТУТ ВЫЧИТАЙ ИЛИ ПРИБАВЛЯЙ МИНУТЫ ДНИ И Т.Д)
module.exports = function(date) {
	var tempTime = new Date(date);

	return {
		get value() {
			var time = new Date(tempTime).toISOString();
			var t = time.match(/[0-9-:]/g).join('');
			return t.slice(0, 10) + ' ' + t.slice(10, 15);
		},

		add: function(number, time) {
			if (number < 0) throw new TypeError('Время не может быть отрицательное');
			switch (time) {
				case 'years': {
					//console.log('years', tempTime);
					tempTime.setFullYear(tempTime.getFullYear() + number);
					//console.log('years', tempTime);
					return this;
				}
				case 'months': {
					//console.log('months', tempTime);
					tempTime.setMonth(tempTime.getMonth() + number);
					//console.log('months', tempTime);
					return this;
				}
				case 'days': {
					//console.log('days', tempTime);
					tempTime.setDate(tempTime.getDate() + number);
					//console.log('days', tempTime);
					return this;
				}
				case 'hours': {
					//console.log('hours', tempTime);
					tempTime.setHours(tempTime.getHours() + number);
					//console.log('hours', tempTime);
					return this;
				}
				case 'minutes': {
					//console.log('minutes', tempTime);
					tempTime.setMinutes(tempTime.getMinutes() + number);
					//console.log('minutes', tempTime);
					return this;
				}
				default:
					throw new TypeError('неверное значение даты');
			}
		},
		subtract: function(number, time) {
			if (number < 0) throw new TypeError('Время не может быть отрицательное');
			switch (time) {
				case 'years': {
					//console.log('years', tempTime);
					tempTime.setFullYear(tempTime.getFullYear() - number);
					//console.log('years', tempTime);
					return this;
				}
				case 'months': {
					//console.log('months', tempTime);
					tempTime.setMonth(tempTime.getMonth() - number);
					//console.log('months', tempTime);
					return this;
				}
				case 'days': {
					//console.log('days', tempTime);
					tempTime.setDate(tempTime.getDate() - number);
					//console.log('days', tempTime);
					return this;
				}
				case 'hours': {
					//console.log('hours', tempTime);
					tempTime.setHours(tempTime.getHours() - number);
					//console.log('hours', tempTime);
					return this;
				}
				case 'minutes': {
					//console.log('minutes', tempTime);
					tempTime.setMinutes(tempTime.getMinutes() - number);
					//console.log('minutes', tempTime);
					return this;
				}
				default:
					throw new TypeError('неверное значение даты');
			}
		}
	};
};

/* 


// Создаем регулярное выражение для разбора даты
// Объявляем вне основной функции, чтобы не создавать переменную при каждом вызове
var dateRegexp = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})/;

// Список поддерживаемых значений для изменения времени
var availableDurations = ['years', 'months', 'days', 'hours', 'minutes'];

// Превращаем "6" в "06"
// Реализуем только для двух символов, так как для года этого делать не нужно
function addLeadingZero(value) {
    // Приводим к строке
    value = String(value);

    return value.length < 2 ? '0' + value : value;
}

function formatDate(date) {
    var res = '';

    res += date.getFullYear();
    res += '-';
    // Не забываем, что нумерация месяцев начинается с нуля
    res += addLeadingZero(date.getMonth() + 1);
    res += '-';
    res += addLeadingZero(date.getDate());
    res += ' ';
    res += addLeadingZero(date.getHours());
    res += ':';
    res += addLeadingZero(date.getMinutes());

    return res;
}

// Проверка входных параметров
function checkValueAndDuration(value, duration) {
    if (value < 0) {
        throw new TypeError('Значение не может быть отрицательным');
    }

    if (availableDurations.indexOf(duration) === -1) {
        throw new TypeError('Неизвестная единица времени');
    }
}

function changeDate(date, value, duration) {
    switch (duration) {
        case 'years':
            value = date.getFullYear() + value;
            date.setFullYear(value);
            break;

        case 'months':
            value = date.getMonth() + value;
            date.setMonth(value);
            break;

        case 'days':
            value = date.getDate() + value;
            date.setDate(value);
            break;

        case 'hours':
            value = date.getHours() + value;
            date.setHours(value);
            break;

        case 'minutes':
            value = date.getMinutes() + value;
            date.setMinutes(value);
            break;

        default:
            // Сюда попасть не должны, так как duration заранее проверили
    }
}


module.exports = function (dateStr) {
	// Рaзбираем строку и создаем дату
	var match = dateStr.match(dateRegexp);
	// При создании даты, нужно учесть, что нумерация месяцев начинается с нуля
	var date = new Date(match[1], match[2] - 1, match[3], match[4], match[5]);

	// Создаем объект, который будет содержать методы для управления временем
	// И сразу его возвращаем
	return {
			get value() {
					return formatDate(date);
			},

			add: function (value, duration) {
					checkValueAndDuration(value, duration);
					changeDate(date, value, duration);

					return this;
			},

			subtract: function (value, duration) {
					checkValueAndDuration(value, duration);
					changeDate(date, -1 * value, duration);

					return this;
			}
	};
};

*/
