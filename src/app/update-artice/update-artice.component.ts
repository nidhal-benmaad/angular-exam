import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AricleService } from '../ArticleService/aricle.service';

@Component({
  selector: 'app-update-artice',
  templateUrl: './update-artice.component.html',
  styleUrls: ['./update-artice.component.css'],
})
export class UpdateArticeComponent implements OnInit {
  constructor(
    private art: AricleService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((val) => console.log('router', val));
  }
  updateData(form: any) {
    console.log('form', form);
    this.art.updateArticle(form).subscribe(() => {
      this.router.navigate(['home']);
    });
  }
}
