import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iCharResponse } from '../models/char.model';

@Injectable({
  providedIn: 'root',
})
export class RickMortyService {
  private apiURL = 'https://rickandmortyapi.com/api/character';
  constructor(private http: HttpClient) {}

  getCharacters(page: number = 1): Observable<iCharResponse> {
    return this.http.get<iCharResponse>(`${this.apiURL}/?page=${page}`);
  }
}
