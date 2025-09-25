using Microsoft.EntityFrameworkCore;
using TodoAPI.Models.Entities;

namespace TodoAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Todo> Todos { get; set; }
    }
}
