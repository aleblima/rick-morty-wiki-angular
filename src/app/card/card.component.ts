import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickMortyService } from '../services/rick-morty.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() character: any;

  isFavorite = false;

  constructor(private service: RickMortyService) {}

  ngOnInit() {
    this.checkFavoriteStatus();
  }

  toggleFavorite() {
    this.service.toggleFavorite(this.character);
    this.checkFavoriteStatus();
  }

  checkFavoriteStatus() {
    this.isFavorite = this.service.isFavorite(this.character.id);
  }
}
