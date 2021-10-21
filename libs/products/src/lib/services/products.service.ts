import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { Product } from '../models/product.model';

const api = environment.apiURL + '/products';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    constructor(private http: HttpClient) {}

    getAllProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${api}`);
    }

    getProduct(productId: string): Observable<Product> {
        return this.http.get<Product>(`${api}/${productId}`);
    }

    createProduct(product: FormData): Observable<any> {
        return this.http.post<any>(`${api}`, product);
    }

    deleteProduct(productId: string): Observable<any> {
        return this.http.delete<any>(`${api}/${productId}`);
    }

    updateProduct(product: FormData, productId: string): Observable<any> {
        return this.http.put<any>(`${api}/${productId}`, product);
    }

    getCount(): Observable<any> {
        return this.http.get<any>(`${api}/get/count`);
    }
}
