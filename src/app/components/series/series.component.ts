import { Component } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
})
export class SeriesComponent {
  constructor(private http: HttpClient) {}
  api: string = 'https://api.themoviedb.org/3/trending/tv/week?language=pt-BR&api_key=';
  series: any;
  imagens: string[] = [];
  imageUrl: string;

  async ngOnInit() {
    try {
      this.http.get<any>(this.api).subscribe((response) => ((this.series = response.results), this.getImagens()));
    } catch (error) {
      console.error('Ocorreu um erro na requisição:', error);
    }
  }

  getImagens() {
    for (let contador = 0; contador < this.series.length; contador++) {
      const imagePath = this.series[contador].backdrop_path;
      const imageSize = 'original';
      this.imageUrl = `https://image.tmdb.org/t/p/${imageSize}${imagePath}`;
      this.imagens.push(this.imageUrl);
    }
  }
}
