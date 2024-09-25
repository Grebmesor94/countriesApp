import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchByAlphaCode(query: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${query}`).pipe(
      catchError(() => of([])),
      map((countries) => (countries.length > 0 ? countries[0] : null))
    );
  }

  searchCapital(query: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/capital/${query}`)
      .pipe(catchError(() => of([])));
  }

  searchCountry(query: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/name/${query}`)
      .pipe(catchError(() => of([])));
  }

  searchRegion(query: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/region/${query}`)
      .pipe(catchError(() => of([])));
  }
}
