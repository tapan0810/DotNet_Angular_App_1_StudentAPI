using System.ComponentModel.DataAnnotations;

namespace Student.API.Models.Student
{
    public class Student1
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;    
        public int Age { get; set; }
        public string Email { get; set; } = string.Empty;
    }
}