using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class PaginationDto
    {
        [Range(1,int.MaxValue)]
        public int PageNumber { get; set; }
        [Range(1 , 100)]
        public int ItemsPerPage { get; set; } = 10;
    }
}