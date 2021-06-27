using System;
using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class PersonDto
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string CreationDate { get; set; }
    }
}