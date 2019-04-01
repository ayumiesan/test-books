import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopbarComponent} from './shared/topbar/topbar.component';
import {BookListComponent} from './book/list/book-list.component';
import {CategoryListComponent} from './category/list/category-list.component';
import {
    MatButtonModule, MatCheckboxModule,
    MatChipsModule, MatFormFieldModule,
    MatGridListModule, MatInputModule,
    MatPaginatorModule,
    MatTableModule, MatToolbarModule
} from '@angular/material';
import {CategoryNewComponent} from './category/new/category-new.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BookNewComponent} from './book/new/book-new.component';
import {BookEditComponent} from './book/edit/book-edit.component';
import {CategoryEditComponent} from './category/edit/category-edit.component';
import {BookShareComponent} from './book/share/book-share.component';

@NgModule({
    declarations: [
        AppComponent,
        TopbarComponent,
        BookListComponent,
        BookNewComponent,
        BookEditComponent,
        BookShareComponent,
        CategoryListComponent,
        CategoryNewComponent,
        CategoryEditComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        MatButtonModule,
        MatGridListModule,
        MatTableModule,
        MatPaginatorModule,
        MatChipsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatToolbarModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
