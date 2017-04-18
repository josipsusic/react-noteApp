var $ = require('jquery');

module.exports = {
    setTodos: function(todos) {
        if($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    
    getTodos: function() {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];
        
            // if JSON.parse fails because of invalid data
        try {
            todos = JSON.parse(stringTodos);
        } catch(e) {
            //if it fails just stick with the default array
        }
            
            //just check if it's an array
        
        return $.isArray(todos) ? todos : [];
        
    },

    filterTodos: function(todos, showCompleted, searchText) {
        var filteredTodos = todos;

        // filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        }); 

        // filter by searchText
        filteredTodos = filteredTodos.filter((todo) => {
            var text = todo.text.toLowerCase();
            return searchText.length === 0 || text.indexOf(searchText) > -1;
        });

        // sort with non-completed first
        filteredTodos.sort((a, b) => {
            //if a is not completed it should come first
            if(!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        });

        return filteredTodos;
    }
};