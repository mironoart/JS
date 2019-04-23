// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */

module.exports = function(command) {
	let arr = command.split(' ');
	var action = arr[0];
	//console.log('******', arr);
	switch (action) {
		case 'ADD':
			add();
			break;
		case 'REMOVE_PHONE':
			return remove();

		case 'SHOW':
			return show();
	}

	function add() {
		var userName = arr[1];
		var numbers = arr[2].split(',');

		if (!phoneBook[userName]) {
			//console.log("Created", userName)
			phoneBook[userName] = numbers;
		} else {
			//console.log("Adding number", numbers)
			phoneBook[userName] = phoneBook[userName].concat(numbers);
		}
	}

	function remove() {
		var num = arr[1];
		var keys = Object.keys(phoneBook);
		var user = '';
		var numberIndex;
		//console.log('\nREMOVING NUMBER - ', num);

		outer: for (var i = 0; i < keys.length; i++) {
			var numbersArr = phoneBook[keys[i]];

			for (var j = 0; j < numbersArr.length; j++) {
				if (numbersArr[j] === num) {
					user = keys[i];
					numberIndex = j;
					//console.log('FINDED USER WITH THIS NUMBER - ', { user, numberIndex });
					break outer;
				}
			}
		}
		if (user) {
			phoneBook[user].splice(numberIndex, 1);
			if (phoneBook[user].length == 0) {
				//console.log('DELETTINGGGGGGGGG');
				delete phoneBook[user];
			}
			//console.log('phoneBook', phoneBook);
			return true;
		} else return false;
	}

	function show() {
		var keys = Object.keys(phoneBook);
		var arr = [];

		for (var i = 0; i < keys.length; i++) {
			var numbersArr = phoneBook[keys[i]];
			var string = keys[i] + ': ';
			for (var j = 0; j < numbersArr.length; j++) {
				string = string.concat(numbersArr[j] + ', ');
				var newString = string.slice(0, string.length - 2);
			}
			//console.log(newString);

			arr.push(newString);
		}
		return arr.sort();
	}

	//console.log("\n\n\nRotatin phoneBook Content", phoneBook)
};

/*  

// Телефонная книга.
// В качестве ключа будем использовать имя контакта
// Значением будет список телефонов контакта
var phoneBook = {};

function addContact(name, phones) {
    // Проверяем, существует ли контакт, если нет – создаем
    if (!phoneBook.hasOwnProperty(name)) {
        phoneBook[name] = [];
    }

    // Добавляем новые телефоны
    // Функция concat не меняет массив, поэтому сохраняем результат
    phoneBook[name] = phoneBook[name].concat(phones);
}

function removeContactPhoneAt(name, index) {
    // Функция splice изменяет массив
    phoneBook[name].splice(index, 1);

    // Если у контакта не осталось номеров, удаляем его
    if (phoneBook[name].length === 0) {
        delete phoneBook[name];
    }
}

function removePhone(phone) {
    // Получаем список всех контактов
    var names = Object.keys(phoneBook);

    for (var i = 0; i < names.length; i++) {
        var name = names[i];

        // Ищем удаляемый телефон в списке контакта
        var phoneIndex = phoneBook[name].indexOf(phone);

        // Если индекс не равен -1, значит телефон принадлежит текущему контакту
        if (phoneIndex !== -1) {
            // Удаление телефона контакта
            removeContactPhoneAt(name, phoneIndex);

            // Выходим из функции, сообщаем об успехе операции
            return true;
        }
    }

    // Телефон так и не был найден, поэтому возвращаем false
    return false;
}

function showPhoneBook() {
    // Получаем список всех контактов
    var names = Object.keys(phoneBook);

    // Сортируем имена (функция sort меняет массив)
    names.sort();

    // Тут для итерации по контактам подходит функция map,
    //  поскольку нам для каждого контакта нужно вернуть список его телефонов
    return names.map(function (name) {
        // Получаем список телефонов контакта
        var phones = phoneBook[name];

        // Формируем строчку для контакта
        return name + ': ' + phones.join(', ');
    });
}


 * @param {String} command
 * @returns {*} - результат зависит от команды

module.exports = function (command) {
	// Разбиваем комнаду по пробелу
	// В нулевой позиции массива лежит название команды
	var parts = command.split(' ');

	// Обработка команды ADD
	if (parts[0] === 'ADD') {
			// Получаем массив телефонов
			var phones = parts[2].split(',');

			// Добавляем контакт и выходим из функции
			return addContact(parts[1], phones);
	}

	// Обработка команды REMOVE_PHONE
	if (parts[0] === 'REMOVE_PHONE') {
			// Удаляем телефон и выходим из функции
			return removePhone(parts[1]);
	}

	// Обработка команды SHOW
	if (parts[0] === 'SHOW') {
			return showPhoneBook();
	}
};

*/
