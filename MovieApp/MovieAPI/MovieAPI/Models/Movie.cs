using Microsoft.Extensions.Options;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieAPI.Models
{
    public class Movie
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [StringLength(255)]
        public string Title { get; set; } = "";

        [Required]
        [StringLength(4096)]
        public string Description { get; set; } = "";

        public ICollection<Review> Reviews { get; set; } = new List<Review>();
    }
}
