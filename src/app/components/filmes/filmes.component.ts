import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss'],
})
export class FilmesComponent {
  constructor(private http: HttpClient) {}

  api: string = 'https://api.themoviedb.org/3/trending/movie/week?language=pt-BR&api_key=';
  filmes: any;
  imagens: string[] = [];
  imageUrl: string;

  async ngOnInit() {
    try {
      this.http.get<any>(this.api).subscribe((response) => (this.filmes = response.results, this.getImagens()));
    } catch (error) {
      console.error('Ocorreu um erro na requisição:', error);
    }
  }

  getImagens() {
    for (let contador = 0; contador < this.filmes.length; contador++) {
      const imagePath = this.filmes[contador].backdrop_path;
      const imageSize = 'original';
      this.imageUrl = `https://image.tmdb.org/t/p/${imageSize}${imagePath}`;
      this.imagens.push(this.imageUrl);
    }
  }
}
