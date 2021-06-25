using System;
using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class PersoCreatenDto
    {
        [Required]
        [MinLength(2)]
        public string FirstName { get; set; }
        [Required]
        [MinLength(2)]
        public string LastName { get; set; }
        
        public string CreationDate { get; set; } 
    }
}