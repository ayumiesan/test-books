import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookListComponent} from './book/list/book-list.component';
import {CategoryListComponent} from './category/list/category-list.component';
import {CategoryNewComponent} from './category/new/category-new.component';
import {BookNewComponent} from './book/new/book-new.component';
import {BookEditComponent} from './book/edit/book-edit.component';
import {CategoryEditComponent} from './category/edit/category-edit.component';
import {BookShareComponent} from './book/share/book-share.component';

const routes: Routes = [
    {path: 'books', component: BookListComponent},
    {path: 'books/new', component: BookNewComponent},
    {path: 'books/:id/edit', component: BookEditComponent},
    {path: 'books/:id/share', component: BookShareComponent},
    {path: 'categories', component: CategoryListComponent},
    {path: 'categories/new', component: CategoryNewComponent},
    {path: 'categories/:id/edit', component: CategoryEditComponent},
    {path: '**', redirectTo: 'books'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
