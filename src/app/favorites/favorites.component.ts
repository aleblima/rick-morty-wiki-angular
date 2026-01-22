import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RickMortyService } from '../services/rick-morty.service';
import { HomeComponent } from '../home/home.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, RouterLink, HomeComponent, CardComponent],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  favoritesList: any[] = [];

  constructor(private service: RickMortyService) {}

  ngOnInit() {
    this.favoritesList = this.service.getFavorites();
    window.scrollTo(0, 0);
  }
}
