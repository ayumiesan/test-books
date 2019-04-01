import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../entity/category';

@Component({
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.less']
})
export class CategoryListComponent implements OnInit {
    displayedColumns: string[] = ['id', 'label', 'actions'];
    categories: Category[];

    constructor(private categoryService: CategoryService) {
    }

    ngOnInit() {
        this.categoryService.getList().subscribe(categories => this.categories = categories);
    }

    public onDelete(id: number) {
        this.categoryService.delete(id).subscribe(() => this.ngOnInit());
    }
}
