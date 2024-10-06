using Microsoft.Extensions.Options;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieAPI.Models
{
    public class Review
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("Movie")]
        public int MovieId { get; set; }

        [Range(1, 5)]
        public int Rating { get; set; }

        [Column(TypeName = "TEXT")]
        public string Comment { get; set; } = "";

        public DateTime ReviewDate { get; set; } = DateTime.Now;

        [StringLength(255)]
        public string ReviewerName { get; set; } = "";

        public Movie? Movie { get; set; } 
    }
}
