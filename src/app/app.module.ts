import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { ArticlesComponent } from './articles/articles.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShowOneArticeComponent } from './show-one-artice/show-one-artice.component';
import { UpdateArticeComponent } from './update-artice/update-artice.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AddArticleComponent, ArticlesComponent, NotFoundComponent, ShowOneArticeComponent, UpdateArticeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
