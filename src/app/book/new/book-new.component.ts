import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {Router} from '@angular/router';
import {Book} from '../../entity/book';
import {CategoryService} from '../../service/category.service';

@Component({
    templateUrl: './book-new.component.html',
    styleUrls: ['./book-new.component.less']
})
export class BookNewComponent implements OnInit {
    form: FormGroup;
    formMat: FormGroup;
    categories;

    constructor(
        private formBuilder: FormBuilder,
        private bookService: BookService,
        private categoryService: CategoryService,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.initForm();
        this.categoryService.getList().subscribe(categories => {
            this.categories = categories;
            categories.map(() => {
                const control = new FormControl();
                (this.form.controls.categories as FormArray).push(control);
            });
        });
    }

    initForm() {
        this.form = this.formMat = this.formBuilder.group({
            title: '',
            resume: '',
            score: '',
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
