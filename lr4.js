function openNewWindow() {
	// Открываем новое окно
	var newWindow = window.open("", "", "width=400,height=400,resizable=yes");

	// Устанавливаем желтый фон страницы
	newWindow.document.body.style.backgroundColor = "yellow";

	// Создаем первую ссылку
	var link1 = newWindow.document.createElement("a");
	link1.href = "about:blank";
	link1.target = "_self";
	link1.innerHTML = "Открыть новую страницу в текущем окне<br>";
	newWindow.document.body.appendChild(link1);

	// Создаем вторую ссылку
	var link2 = newWindow.document.createElement("a");
	link2.href = "javascript: var child = window.open('about:blank'); child.document.body.style.backgroundColor = 'green'; var closeBtn = child.document.createElement('button'); closeBtn.innerHTML = 'Close'; closeBtn.onclick = function() { child.close(); }; child.document.body.appendChild(closeBtn);";
	link2.target = "_self";
	link2.innerHTML = "Открыть новую страницу в новом окне<br>";
	newWindow.document.body.appendChild(link2);
  }