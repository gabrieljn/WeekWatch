import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.scss']
})
export class TelaPrincipalComponent {
  constructor(private router: Router) { }

  redirecionar(){
    this.router.navigate(['/filmes']);
  }

}

