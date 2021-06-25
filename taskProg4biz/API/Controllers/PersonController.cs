using System.Collections.Generic;
using System.Linq;
using API.Data;
using API.Dtos;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using System;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        private DataContext dbContext;

        public PersonController(DataContext objperson)
        {
            this.dbContext = objperson;
        }

        [HttpGet]
        public IEnumerable<PersonDto> Index()
        {

           var persons = dbContext.Persons.ToList()
           .Select(x=>new PersonDto(){
               FirstName =x.FirstName,
               LastName = x.LastName,
               CreationDate = x.CreationDate,
               Id = x.Id 
           })
           ;
           return(persons);
        }

        [HttpPost]
        public int Create(PersoCreatenDto persoCreatenDto)
        {

            var person = new Person()
            {
                FirstName = persoCreatenDto.FirstName,
                LastName = persoCreatenDto.LastName,
                CreationDate = persoCreatenDto.CreationDate
            };
            dbContext.Add(person);
            dbContext.SaveChanges();
            return person.Id;
        }

    }
}