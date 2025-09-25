using System.ComponentModel.DataAnnotations;

namespace TodoAPI.Models.Entities
{
    public class Todo
    {
        [Key]
        public Guid Id { get; set; }
        public required string Message { get; set; }

        public bool isCompleted { get; set; }
    }
}
