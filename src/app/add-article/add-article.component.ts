import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AricleService } from '../ArticleService/aricle.service';
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css'],
})
export class AddArticleComponent implements OnInit {
  constructor(private art: AricleService, private router: Router) {}

  ngOnInit(): void {}
  saveData(form: any) {
    console.log('form', form);
    this.art.addArticle(form).subscribe(() => {
      this.router.navigate(['home']);
    });
  }
}
