import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  toggleFavorite(character: any) {
    this.isFavorite = !this.isFavorite;
  }
}
