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
