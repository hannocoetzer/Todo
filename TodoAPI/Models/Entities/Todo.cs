using System.ComponentModel.DataAnnotations;

namespace TodoAPI.Models.Entities
{
    public class Todo
    {
        [Key]
        public Guid Guid { get; set; }
        public required string Message { get; set; }
    }
}
