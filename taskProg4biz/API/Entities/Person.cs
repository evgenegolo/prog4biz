
using System;
using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class Person
    { 
        public int Id { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        
        public string CreationDate {get;set;} 
    }
}