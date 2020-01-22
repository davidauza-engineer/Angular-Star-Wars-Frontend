import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    let detallePelicula;
    detallePelicula = document.getElementById('detalle-pelicula');
    detallePelicula.classList.add('d-none');
    let gridPeliculas;
    gridPeliculas = document.getElementById('grid-peliculas');
    gridPeliculas.classList.remove('d-none');
  }

}
