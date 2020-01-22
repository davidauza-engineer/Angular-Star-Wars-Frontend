import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    let gridPeliculas;
    gridPeliculas = document.getElementById('grid-peliculas');
    gridPeliculas.classList.add('d-none');
    let detallePelicula;
    detallePelicula = document.getElementById('detalle-pelicula');
    detallePelicula.classList.remove('d-none');
  }

}
