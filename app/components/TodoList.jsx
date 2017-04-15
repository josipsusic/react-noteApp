var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass ({
    render: function() {
        var { todos } = this.props;
        var renderTodos = () => {
            return todos.map((todo) => {
                return (
                    //add unique key prop to keep track of individual components
                    <Todo key={todo.id} {...todo}/>
                );
            });
        };
        return (
            <div>
                {renderTodos()}
            </div>
        );  
    }
})

module.exports = TodoList;