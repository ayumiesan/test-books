import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {Router} from '@angular/router';
import {Category} from "../../entity/category";

@Component({
    templateUrl: './category-new.component.html',
    styleUrls: ['./category-new.component.less']
})
export class CategoryNewComponent implements OnInit {
    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private categoryService: CategoryService,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.form = this.formBuilder.group({
            label: ''
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
