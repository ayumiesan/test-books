import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {config} from '../../config';
import {Book} from '../entity/book';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class BookService {
    constructor(private http: HttpClient) {
    }

    public getBooks(): Observable<Book[]> {
        const url = config.apiUrl + 'books';

        return this.http.get<any>(url).pipe(
            map(results => {
                const books: Book[] = [];
                for (const bookJson of results) {
                    const book = new Book();
                    Object.assign(book, bookJson);
                    books.push(book);
                }

                return books;
            })
        );
    }

    public get(id: number): Observable<Book> {
        const url = config.apiUrl + 'books/' + id;

        return this.http.get<any>(url).pipe(
            map(bookJson => {
                const book = new Book();
                Object.assign(book, bookJson);

                return book;
            })
        );
    }

    public addNew(book: Book): Observable<Book> {
        const url = config.apiUrl + 'books';

        return this.http.post<any>(url, book).pipe(
            map(bookJson => {
                const book = new Book();
                Object.assign(book, bookJson);

                return book;
            })
        );
    }

    public delete(id: number): Observable<Book> {
        const url = config.apiUrl + 'books/' + id;

        return this.http.delete<any>(url);
    }

    public share(id: number, formValue: any): Observable<Book> {
        const url = config.apiUrl + 'books/' + id + '/share';

        return this.http.post<any>(url, formValue);
    }
}
