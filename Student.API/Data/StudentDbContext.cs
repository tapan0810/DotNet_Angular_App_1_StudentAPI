using Microsoft.EntityFrameworkCore;
using Student.API.Models.Student;

namespace Student.API.Data
{
    public class StudentDbContext : DbContext
    {
        public StudentDbContext(DbContextOptions<StudentDbContext> options) : base(options)
        {
        }

        public DbSet<Student1> Student1s => Set<Student1>();
    }
}