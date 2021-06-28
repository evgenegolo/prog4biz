using System.Collections.Generic;
using API.Dtos;

namespace API.Services
{
    public interface IPersonService
    {
        public IEnumerable<PersonDto> GetPersons();
        
    }
}