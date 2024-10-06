using Microsoft.EntityFrameworkCore;

namespace MovieAPI.Models
{
    public class MovieReviewsContext : DbContext
    {
        public MovieReviewsContext(DbContextOptions<MovieReviewsContext> options) : base(options)
        {
        }

        public DbSet<Movie> Movie { get; set; }
        public DbSet<Review> Review { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }
    }
}