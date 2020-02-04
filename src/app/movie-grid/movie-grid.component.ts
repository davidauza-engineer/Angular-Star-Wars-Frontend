import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.css']
})
export class MovieGridComponent implements OnInit {

  movies;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getMovies().subscribe((data) => {
      console.log(data); // TODO remover en producción
      this.movies = data['results'];
    });
  }

}
