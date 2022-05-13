import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AricleService } from '../ArticleService/aricle.service';

@Component({
  selector: 'tr[app-show-one-artice]',
  templateUrl: './show-one-artice.component.html',
  styleUrls: ['./show-one-artice.component.css'],
})
export class ShowOneArticeComponent implements OnInit {
  @Input() item!: any;
  constructor(private art: AricleService, private router: Router) {}

  ngOnInit(): void {}

  updateData(item: any) {
    console.log('item', item);
    this.router.navigate(['/updateArticle', { data: { article: item } }]);
  }
}
