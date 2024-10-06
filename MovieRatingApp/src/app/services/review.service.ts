import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Review } from '../models/review';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private apiUrl = 'http://localhost:5245/api/Reviews';

  constructor(private http: HttpClient) {}

  getReviews(movieId: number): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiUrl}/${movieId}`);
  }

  addReview(movieId: number, review: Review): Observable<Review> {
    return this.http.post<Review>(this.apiUrl, review);
  }
}
