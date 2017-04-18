var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });
    
    it('should render one todo component for each todo item', () => {
        var todos = [{
            id: 1,
            text: 'do something'
        },
        {
            id: 2,
            text: 'Check mail'
        }];
    
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
        
    //check how many Todo components are rendered under TodoList component
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
        
    expect(todosComponents.length).toBe(todos.length);
        
    });
});