import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MovierepoService {

  constructor(private http:HttpClient) {
      let url =`${environment.API_BASE_URL}movie/popular?api_key=${environment.TMDB_API_KEY}&language=${environment.API_LANGUAGE}`
      console.log(url);
   }
   getPopularMovies(pageNo) {
    return this.http.get(
      `${environment.API_BASE_URL}movie/popular?api_key=${environment.TMDB_API_KEY}&language=${environment.API_LANGUAGE}&page=`+pageNo
    );
  }
}

// GetMovies(){
//   this.movieService.getPopularMovies(2).subscribe((data: any) => {
//     this.popularMovies = data.results;
//     console.log(this.popularMovies);
//     this.AssignDataToGrid();
//   });
// }
// AssignDataToGrid() {
//   let popularMovies = this.popularMovies.map((movie) => ({
//     Title: movie.title,
//     Rating: movie.vote_average,
//     overview: movie.overview, 
//     Year: movie.release_date,
//   }));
//   console.log(popularMovies);
//   this.rowData = popularMovies;
// }