namespace TodoAPI.Models.Entities
{
    public class Todo
    {
        public Guid Guid { get; set; }
        public required string Message { get; set; }
    }
}
