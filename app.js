// AngularJS Todo Application
angular.module('todoApp', [])
.controller('TodoController', ['$scope', '$http', function($scope, $http) {
    
    // Initialize the todos array
    $scope.todos = [];
    
    // Initialize the new todo input
    $scope.newTodo = '';
    
    // Function to add a new todo
    $scope.addTodo = function() {
        console.log("AddTodo");
        var todoData = {
                Message : 'testing angular post'
            };

         $http.post('https://localhost:7144/api/Todo', todoData)
                .then(function(response) {
                    // Success - add the returned todo to our local array
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
        // TODO - Implement functionality to remove a todo by index
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
}]);
