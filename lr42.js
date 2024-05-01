var now = new Date();
		var hours = now.getHours();

		// Получаем объект body страницы
		var body = document.body;

		// Выбираем цвет в зависимости от времени суток
		if (hours >= 6 && hours < 12) {
			body.style.backgroundColor = "#F5DEB3"; // Бежевый цвет для утра
		} else if (hours >= 12 && hours < 18) {
			body.style.backgroundColor = "#87CEFA"; // Голубой цвет для дня
		} else if (hours >= 18 && hours < 24) {
			body.style.backgroundColor = "#808080"; // Серый цвет для вечера
		} else {
			body.style.backgroundColor = "#000080"; // Синий цвет для ночи
		}