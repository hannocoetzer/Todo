// AngularJS Todo Application
angular.module('todoApp', [])
.controller('TodoController', ['$scope', '$http', function($scope, $http) {
    
    // Initialize the todos array
    $scope.todos = [];
    
    // Initialize the new todo input
    $scope.newTodo = '';
    
    // Function to add a new todo
    $scope.addTodo = function() {
        debugger;
        var todoData = {
                Message : $scope.newTodo
            };

         $http.post('https://localhost:7144/api/Todo', todoData)
                .then(function(response) {
                    //push to array
                    $scope.todos.push({
                        id: response.data.id,
                        text: response.data.message,
                        completed: response.data.isCompleted || false
                    });
                    $scope.newTodo = '';
                })
                .catch(function(error) {
                    console.error('Error adding todo:', error);
                    alert('Failed to add todo. Please try again.');
                });
    };
    
    // Function to remove a todo by index
    $scope.removeTodo = function(index) {
        debugger;
        var todoGuid = $scope.todos[index].id;
        $http.delete('https://localhost:7144/api/Todo/' + todoGuid)
        .then(function() {
            $scope.todos.splice(index, 1);
        })
        .catch(function(error) {
            console.error('Error deleting todo:', error);
            alert('Failed to delete todo. Please try again.');
        });
    };

    // Function to update isCompleted
    $scope.updateTodo = function(todo) {

    };
    
    // Function to get the count of completed todos
    $scope.getCompletedCount = function() {
        return $scope.todos.filter(function(todo) {
            return todo.completed;
        }).length;
    };
    
    // Function to get the count of remaining (incomplete) todos
    $scope.getRemainingCount = function() {
        return $scope.todos.filter(function(todo) {
            return !todo.completed;
        }).length;
    };
    
    // Function to toggle all todos completion status
    $scope.toggleAll = function() {
        var allCompleted = $scope.todos.every(function(todo) {
            return todo.completed;
        });
        
        $scope.todos.forEach(function(todo) {
            todo.completed = !allCompleted;
        });
    };
    
    // Function to clear all completed todos
    $scope.clearCompleted = function() {
        $scope.todos = $scope.todos.filter(function(todo) {
            return !todo.completed;
        });
    };

    // Function to get Todos on startup
    $scope.getTodos = function() {
        debugger;
        $http({
            method: 'GET',
            url: 'https://localhost:7144/api/Todo',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function(response) {

            $scope.todos = response.data.map(function(todo) {
                return {
                    id: todo.id,
                    text: todo.message,
                    completed: todo.isCompleted || false
                };
            });
        })
        .catch(function(error) {
            console.error('Error loading todos:', error);
            alert('Failed to load todos. Please refresh the page.');
        });
    };

    $scope.getTodos();
}]);
