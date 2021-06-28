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
        public IActionResult Index([FromQuery]PaginationDto pageDto)
        {

           int pageNumber = pageDto.PageNumber - 1;
           int items = pageDto.ItemsPerPage;

           var persons = dbContext.Persons
           .Skip(pageNumber * items)
            .Take(items)
           .Select(x=>new PersonDto(){
               FirstName =x.FirstName,
               LastName = x.LastName,
               CreationDate = x.CreationDate,
               Id = x.Id 
           })
           .ToList();
            var temp = new {persons,count = dbContext.Persons.Count()};
           return(Ok(temp));
        }

          

        [HttpPost]
        public bool Create(PersoCreatenDto persoCreatenDto)
        {
            var person = new Person()
            {
                FirstName = persoCreatenDto.FirstName,
                LastName = persoCreatenDto.LastName,
                CreationDate = persoCreatenDto.CreationDate
            };
            dbContext.Persons.Add(person);
            dbContext.SaveChanges();
            return true;
        }

    }
}