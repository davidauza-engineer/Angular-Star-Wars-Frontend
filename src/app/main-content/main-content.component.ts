import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  peliculas;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getMovies().subscribe((data) => {
      this.peliculas = data['results'];
    });
  }

  extraerAnio(fecha: any) {
    return fecha.toString().substr(0, 4);
  }
}
