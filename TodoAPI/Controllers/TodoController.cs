using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TodoAPI.Data;
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
        [HttpPost]
        public IActionResult GetTodos(string message) {

            var allTodos = dbContext.Todos.ToList();
            return Ok(allTodos);
        }
    }
}
