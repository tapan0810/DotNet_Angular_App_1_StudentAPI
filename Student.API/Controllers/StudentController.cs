using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Student.API.Data;
using Student.API.Models.Student;

namespace Student.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController(StudentDbContext _context) : ControllerBase
    {

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Student1>>> GetAllStudents()
        {
            var result = await _context.Student1s.ToListAsync();

            if(result.Count == 0 || result is null)
            {
                return NotFound("No Student Found");
            }
            return Ok(result);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Student1>> GetStudentById(int id)
        {
            var result = await _context.Student1s.FirstOrDefaultAsync(x => x.Id == id);

            if(result is null) return NotFound("No Student Found");
            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<Student1>> CreateStudent(Student1 student)
        {
            if(student is null) return BadRequest("Invalid Student Data");

            _context.Student1s.Add(student);
            await _context.SaveChangesAsync();
            return Ok(student);
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult<Student1>> DeleteStudent(int id)
        {
            var student = await _context.Student1s.FirstOrDefaultAsync(x => x.Id == id);
            if(student is null) return NotFound("Student not found");

            _context.Student1s.Remove(student);
            await _context.SaveChangesAsync();
            return Ok(student);
        }
    }
        
    
}