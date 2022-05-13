import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AricleService {
  constructor(private http: HttpClient) {}
  fetchArticles() {
    return this.http.get('http://localhost:3000/articles');
  }
  addArticle(data: any) {
    return this.http.post('http://localhost:3000/articles', data);
  }
  updateArticle(id: any) {
    return this.http.delete('http://localhost:3000/articles/' + id);
  }
}
