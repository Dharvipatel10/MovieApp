# MovieRatingApp

This project is a Single Page Application (SPA) that allows users to browse a list of movies, read reviews, and submit their own ratings and reviews. The front end is developed using Angular, and the back end consists of a .NET 8 RESTful API. The data is stored in an SQL Server database and accessed using Entity Framework Core.

# Features
- List of Movies: Users can view a list of all available movies.
- Movie Reviews: Each movie can be reviewed with a comment and a rating between 1 to 5 stars.
- Average Rating: An average rating for each movie is displayed based on user reviews.
- RESTful API Endpoints for interacting with the movie and review data.

# Technology Stack
- Frontend: Angular
- Backend: .NET 8 (RESTful API)
- Database: SQL Server (or SQLite as an alternative)
- ORM: Entity Framework Core
- Version Control: Git (Repository hosted on GitHub)

# API Endpoints
The backend API exposes the following endpoints:

1) Movies

GET /api/movies: Retrieves the list of all movies.

GET /api/movies/{id}: Retrieves details of a specific movie.

2) Reviews

POST /api/movies/{movieId}/reviews: Adds a review to a movie.

GET /api/movies/{movieId}/reviews: Retrieves all reviews for a specific movie.

# Database Design
The database contains two main tables: Movies and Reviews.

- Movie Table:
   Id (Primary Key)
  
   Title (string, max length 255)
  
   Description (string, max length 4096)

- Review Table:

   Id (Primary Key)

   MovieId (Foreign Key)

   Rating (integer, 1 to 5 stars)

   Comment (string)

   ReviewDate (DateTime)

   ReviewerName (string, max length 255)

# Getting Started
To run this project on your local machine, follow the instructions below:

- Prerequisites:
    Node.js (for Angular)
  
    .NET SDK 8
  
    SQL Server (or SQLite)
  
    Git
  
# Steps:
  1) Clone the Repository
  2) Setup the Backend(.net API)
  3) Setup the Frintend(Angular App)
  4) API Testing

# License
This project is licensed under the MIT License file for details.

# Contact
if you have any questions or suggestions,feel free to reach out:
- Name : Dharvi Patel

- Email: dharviPatel1610@gmail.com
