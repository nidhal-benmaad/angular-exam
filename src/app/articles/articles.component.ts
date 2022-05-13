import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AricleService } from '../ArticleService/aricle.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  list: any;
  constructor(private art: AricleService, private router: Router) {}

  ngOnInit(): void {
    this.art.fetchArticles().subscribe((response) => {
      this.list = response;
    });
  }
}
