import {Component, Input, OnInit} from '@angular/core';
import {MovieDetailComponent} from '../movie-detail/movie-detail.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  constructor() { }

  @Input() pelicula;

  ngOnInit() {
    console.log(this.pelicula); // TODO remover en producción
  }

  onClick() {
    let gridPeliculas;
    gridPeliculas = document.getElementById('grid-peliculas');
    gridPeliculas.classList.add('d-none');
    let detallePelicula;
    detallePelicula = document.getElementById('detalle-pelicula');
    detallePelicula.classList.remove('d-none');
    MovieDetailComponent.actualizarContenido(this.pelicula);
  }

}
