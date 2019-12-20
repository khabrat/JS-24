(function() {
	'use strict'
// 	Напишите код, который будет спрашивать логин (prompt).

// Если посетитель вводит «Админ», то спрашивать пароль, если нажал отмена (escape) – выводить «Вход отменён», если вводит что-то другое – «Я вас не знаю».

// Пароль проверять так. Если введён пароль «Чёрный Властелин», то выводить «Добро пожаловать!», иначе – «Пароль неверен», при отмене – «Вход отменён».
	let loginName = 'Админ';
	let passwordData = 'Чёрный Властелин';
	let password;
	let login = prompt('Введите логин');
	if (login == null) {
		document.write('Вход отменён');
	} else if (login != loginName) {
		document.write('Я вас не знаю');
	} else {
		password = prompt(' Введите пароль');
		if (password == null) {
			document.write('Вход отменён');
		} else if (password != passwordData) {
			document.write('Пароль неверен');
		} else {
			document.write('Добро пожаловать!');
		}
	}
})();