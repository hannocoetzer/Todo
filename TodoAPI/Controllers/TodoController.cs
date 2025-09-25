using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TodoAPI.Data;
using TodoAPI.Models.DTO;
using TodoAPI.Models.Entities;

namespace TodoAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;
        public TodoController(ApplicationDbContext dbContext)
        {
                this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetTodos(string message) {

            var allTodos = dbContext.Todos.ToList();
            return Ok(allTodos);
        }

        [HttpPost]
        public IActionResult AddTodo([FromBody] TodoDTO addTodo)
        {
            if (addTodo == null || string.IsNullOrWhiteSpace(addTodo.Message))
                return BadRequest("Message is required");

            var todoEntity = new Todo()
            {
                Message = addTodo.Message
            };

            dbContext.Todos.Add(todoEntity);
            dbContext.SaveChanges();

            return Ok(todoEntity);
        }
    }
}
