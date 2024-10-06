import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [
    {
      id: 1,
      title: 'The Lion King (1994)',
      posterUrl: 'assets/images/The_Lion_KIng.jpeg'
    },
    {
      id: 2,
      title: 'Spider-Man: Across the Spider-Verse',
      posterUrl: 'assets/images/Spider-Man.jpg'
    },
    {
      id: 3,
      title: 'Bambi (1942)',
      posterUrl: 'assets/images/Bambi.jpg'
    },
    {
      id: 4,
      title: '12th Fail',
      posterUrl: 'assets/images/Fail.jpg'
    },
    {
      id: 5,
      title: '3 Idiots',
      posterUrl: 'assets/images/Three_idiots.jpg'
    },
    {
      id: 6,
      title: 'Laapataa Ladies',
      posterUrl: 'assets/images/Laapataa_Ladis.jpg'
    },
    {
      id: 7,
      title: 'Uri: The Surgical Strike',
      posterUrl: 'assets/images/Uri.jpg'
    },
    {
      id: 8,
      title: 'Luck (2022)',
      posterUrl: 'assets/images/Luck.jpg'
    },
    {
      id: 9,
      title: 'The House (2022)',
      posterUrl: 'assets/images/The_House.jpg'
    },
    {
      id: 10,
      title: 'Kung Fu Panda 4 (2024)',
      posterUrl: 'assets/images/Panda.jpg'
    },
    {
      id: 11,
      title: 'Migration',
      posterUrl: 'assets/images/Migration.jpg'
    },
    {
      id: 12,
      title: 'Guardians of the Galaxy',
      posterUrl: 'assets/images/Guardians_of_Galaxy.jpg'
    },
    {
      id: 13,
      title: 'Iron Man (2008)',
      posterUrl: 'assets/images/Iron_Man.jpg'
    },
    {
      id: 14,
      title: 'Thor (2011)',
      posterUrl: 'assets/images/Thor.jpg'
    },
    {
      id: 15,
      title: 'Leo (2023)',
      posterUrl: 'assets/images/Leo.jpg'
    },
    {
      id: 16,
      title: 'The Simpsons Movie (2007)',
      posterUrl: 'assets/images/Simpsons.jpg'
    },
    {
      id: 17,
      title: 'Inside Out (2015)',
      posterUrl: 'assets/images/Inside_Out.jpg'
    },
    {
      id: 18,
      title: 'The Super Mario Bros. Movie (2023)',
      posterUrl: 'assets/images/Super_Mario.jpg'
    },
    {
      id: 19,
      title: 'Moana (2016)',
      posterUrl: 'assets/images/Moana.jpeg'
    },
    {
      id: 20,
      title: 'Stree 2: Sarkate Ka Aatank',
      posterUrl: 'assets/images/Stree_2.jpg'
    },
    {
      id: 21,
      title: 'Terrifier (2016)',
      posterUrl: 'assets/images/Terrifier.jpg'
    },
    {
      id: 22,
      title: 'Joker (2019)',
      posterUrl: 'assets/images/Joker.jpg'
    },
    {
      id: 23,
      title: 'The Family Man (2019)',
      posterUrl: 'assets/images/The_FamilyMan.jpg'
    },
    {
      id: 24,
      title: 'Inception',
      posterUrl: 'assets/images/Inception.jpg'
    },
    {
      id: 25,
      title: 'The Matrix',
      posterUrl: 'assets/images/The_Matrix.jpg'
    },
  ];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    
  }
}

