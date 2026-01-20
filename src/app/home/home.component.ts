import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RickMortyService } from '../services/rick-morty.service';
import { iChar } from '../models/char.model';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, CardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  characters: iChar[] = [];

  constructor(private service: RickMortyService) {}
  ngOnInit() {
    this.loadCharacter();
  }

  loadCharacter() {
    this.service.getCharacters().subscribe({
      next: (data) => {
        this.characters = data.results;
        console.log('Dados carregados: ', this.characters);
      },
      error: (erro) => {
        console.error('Erro ao procurar dados: ', erro);
      },
    });
  }
}
