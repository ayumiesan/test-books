import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Book} from '../../entity/book';
import {CategoryService} from '../../service/category.service';
import {Category} from "../../entity/category";

@Component({
    templateUrl: './book-edit.component.html',
    styleUrls: ['./book-edit.component.less']
})
export class BookEditComponent implements OnInit {
    form: FormGroup;
    formMat: FormGroup;
    book: Book;
    categories: Category[];

    constructor(
        private formBuilder: FormBuilder,
        private bookService: BookService,
        private categoryService: CategoryService,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }



    ngOnInit() {
        const id = parseInt(this.route.snapshot.paramMap.get('id'));

        this.bookService.get(id).subscribe(book => {
            this.book = book;
            this.initForm(book);

            this.categoryService.getList().subscribe(categories => {
                this.categories = categories;
                categories.map(() => {
                    const control = new FormControl();
                    (this.form.controls.categories as FormArray).push(control);
                });
            });
        });
    }

    initForm(book: Book) {
        this.form = this.formMat = this.formBuilder.group({
            id: book.id,
            title: book.title,
            resume: book.resume,
            score: book.score,
            categories: new FormArray([])
        });
    }

    onSubmitForm() {
        const formValue = this.form.value;
        let book = new Book();
        Object.assign(book, formValue);

        let categories = [];
        for(let index in formValue['categories']) {
            if(formValue['categories'][index]) {
                categories.push(this.categories[index]);
            }
        }
        book.categories = categories;

        this.bookService.addNew(book).subscribe(() => {
            this.router.navigate(['/books']);
        });
    }
}
