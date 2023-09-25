import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Menu } from '../../classes/menu';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = '../../../assets/menu.json';


  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Menu> {
    return this.http.get<Observable<Menu>>(this.url).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

}
