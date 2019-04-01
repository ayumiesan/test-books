import {Component, OnInit} from '@angular/core';
import {Book} from '../../entity/book';
import {BookService} from '../../service/book.service';

@Component({
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.less']
})
export class BookListComponent implements OnInit {
    displayedColumns: string[] = ['id', 'title', 'resume', 'score', 'categories', 'actions'];
    books: Book[];

    constructor(private bookService: BookService) {
    }

    ngOnInit() {
        this.bookService.getBooks().subscribe(books => this.books = books);
    }

    public onDelete(id: number) {
        this.bookService.delete(id).subscribe(() => this.ngOnInit());
    }
}
