import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { ReviewService } from '../services/review.service';
import { Movie } from '../models/movie';
import { Review } from '../models/review';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  movie!: Movie;
  reviews: Review[] = [];
  averageRating: number = 0;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private reviewService: ReviewService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovie(id).subscribe((movie) => {
      this.movie = movie;
    });
    this.fetchReviews(id);
  }

  fetchReviews(movieId: number): void {
    this.reviewService.getReviews(movieId).subscribe((reviews) => {
      this.reviews = reviews;
      this.calculateAverageRating();
    });
  }

  calculateAverageRating(): void {
    if (this.reviews.length > 0) {
      const total = this.reviews.reduce((sum, review) => sum + review.rating, 0);
      this.averageRating = total / this.reviews.length;
    } else {
      this.averageRating = 0;
    }
  }
}
