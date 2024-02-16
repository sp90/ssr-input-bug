import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient)

  getWelcome() {
    return this.http.get<{ message: string }>('/api/welcome').pipe(map((res) => res.message));
  }
}
