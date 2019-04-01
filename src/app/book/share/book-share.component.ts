import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';

@Component({
    templateUrl: './book-share.component.html',
    styleUrls: ['./book-share.component.less']
})
export class BookShareComponent implements OnInit {
    form: FormGroup;
    formMat: FormGroup;
    id: number;

    constructor(
        private formBuilder: FormBuilder,
        private bookService: BookService,
        private categoryService: CategoryService,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.initForm();
    }

    initForm() {
        this.form = this.formMat = this.formBuilder.group({
            email: '',
        });
    }

    onSubmitForm() {
        const formValue = this.form.value;

        this.bookService.share(this.id, formValue).subscribe(() => {
            this.router.navigate(['/books']);
        });
    }
}
