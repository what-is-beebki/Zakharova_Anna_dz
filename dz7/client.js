const socket = new WebSocket("ws://localhost:9000");
			
			socket.onopen = function()
			{
				console.log("Клиент: Соединение установлено");
				socket.send("Ментимер Шаймиев, Рудольф Нуриев, Губайдуллина Софья, Ринат Ибрагимов, Алсу, Марат Сафин (лар), Дасаев Ринат, Хаматова Чулпан");
			};
			socket.onclose = function(event)
			{
				if (event.wasClean)
					console.log("Клиент: Соединение закрыто");
				else 
					alert("Клиент: Соединение прервано");
			};

			socket.onerror = function(error)
			{
				alert("Клиент: Ошбибка", error.message);
			};