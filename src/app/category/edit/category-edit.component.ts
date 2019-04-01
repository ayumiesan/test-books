import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';
import {Category} from "../../entity/category";

@Component({
    templateUrl: './category-edit.component.html',
    styleUrls: ['./category-edit.component.less']
})
export class CategoryEditComponent implements OnInit {
    form: FormGroup;
    formMat: FormGroup;

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

        this.categoryService.get(id).subscribe(category => {
            this.initForm(category);
        });
    }

    initForm(category: Category) {
        this.form = this.formMat = this.formBuilder.group({
            id: category.id,
            label: category.label
        });
    }

    onSubmitForm() {
        const formValue = this.form.value;
        let category = new Category();
        Object.assign(category, formValue);

        this.categoryService.addNew(category).subscribe(() => {
            this.router.navigate(['/categories']);
        });
    }
}
