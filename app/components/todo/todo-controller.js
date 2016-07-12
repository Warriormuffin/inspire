(function(){
	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns and array
	// saveTodos accepts an array and stores it to your local storage
	
	var ts = new TodoService()
	var todos = ts.getTodos();

	$('#todo-form').on('submit', function(event){
		event.preventDefault();
		var form = this;
		var task = form.task.value
		

		todos.push(task);
		ts.saveTodos(todos)
		update();
	})
			$(`#todo-list`).on('click', 'li', function(event){
				var task = $(event.target).text()
				removeTaskByName(task);
				ts.saveTodos(todos)
				update()
				
			})


	function removeTaskByName(name){
		for(var i = 0; i < todos.length; i++){
			var currentTask = todos[i].toLowerCase();
			if(currentTask == name.toLowerCase()){
				return	todos.splice(i, 1)
		
			}
		}
	}
	
	function update(){
		$(`#todo-list`).empty()
		for(var i = 0; i < todos.length; i++){
			var currentTask = todos[i];

			$('#todo-list').append(`<li>${currentTask.toUpperCase()}</li>`)
		}
	}

	update()
	
}())
