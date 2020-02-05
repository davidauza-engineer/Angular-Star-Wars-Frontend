import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  public static actualizarContenido(pelicula) {
    document.getElementById('detail-titulo').textContent = pelicula.title;
    document.getElementById('detail-episodio').textContent = 'Episodio: ' + pelicula.episode_id;
    document.getElementById('detail-opening').textContent = 'Opening: ' + pelicula.opening_crawl;
    document.getElementById('detail-director').textContent = 'Director: ' + pelicula.director;
    document.getElementById('detail-productor').textContent = 'Productor: ' + pelicula.producer;
    document.getElementById('detail-lanzamiento').textContent = 'Fecha de lanzamiento: ' + pelicula.release_date;
    document.getElementById('detail-personajes').textContent = 'Personajes: ' + pelicula.characters;
    document.getElementById('detail-planetas').textContent = 'Planetas: ' + pelicula.planets;
    document.getElementById('detail-naves').textContent = 'Naves: ' + pelicula.planets;
    document.getElementById('detail-vehiculos').textContent = 'Vehículos: ' + pelicula.vehicles;
    document.getElementById('detail-especies').textContent = 'Especies: ' + pelicula.species;
    document.getElementById('detail-creacion').textContent = 'Fecha de Creación: ' + pelicula.created;
    document.getElementById('detail-edicion').textContent = 'Fecha de Edición: ' + pelicula.edited;
    document.getElementById('detail-url').textContent = 'URL: ' + pelicula.url;
  }

  constructor() {
  }

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
