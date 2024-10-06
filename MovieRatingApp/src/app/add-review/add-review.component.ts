import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from '../services/review.service';
import { Review } from '../models/review';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css'],
})
export class AddReviewComponent implements OnInit {
  movieId!: number;
  movie!: Movie;
  review: Review = {
    movieId: 0,
    rating: 5, 
    comment: '',
    reviewerName: '',
  };

  constructor(
    private route: ActivatedRoute,
    private reviewService: ReviewService,
    private router: Router,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.movieId = Number(this.route.snapshot.paramMap.get('id'));
    this.review.movieId = this.movieId;

    this.movieService.getMovie(this.movieId).subscribe((movie) => {
      this.movie = movie;
    });
  }

  submitReview(): void {
    this.reviewService.addReview(this.movieId, this.review).subscribe(() => {
      this.router.navigate(['/movies', this.movieId]);
    });
  }

  onRatingSet(rating: number): void {
    this.review.rating = rating;
  }
}
