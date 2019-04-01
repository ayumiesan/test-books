import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {config} from '../../config';
import {Category} from '../entity/category';
import {map} from 'rxjs/operators';
import {Book} from "../entity/book";

@Injectable({providedIn: 'root'})
export class CategoryService {
    constructor(private http: HttpClient) {
    }

    public getList(): Observable<Category[]> {
        const url = config.apiUrl + 'categories';

        return this.http.get<any>(url).pipe(
            map(results => {
                const categories: Category[] = [];
                for (const categoryJson of results) {
                    const category = new Category();
                    Object.assign(category, categoryJson);
                    categories.push(category);
                }

                return categories;
            })
        );
    }

    public get(id: number): Observable<Category> {
        const url = config.apiUrl + 'categories/' + id;

        return this.http.get<any>(url).pipe(
            map(categoryJson => {
                const category = new Category();
                Object.assign(category, categoryJson);

                return category;
            })
        );
    }

    public addNew(category: Category): Observable<Category> {
        const url = config.apiUrl + 'categories';

        return this.http.post<any>(url, category).pipe(
            map(categoryJson => {
                const category = new Category();
                Object.assign(category, categoryJson);

                return category;
            })
        );
    }

    public delete(id: number): Observable<Book> {
        const url = config.apiUrl + 'categories/' + id;

        return this.http.delete<any>(url);
    }
}
