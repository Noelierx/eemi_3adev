import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// On importe rxjs pour faciliter la gestion des événements asynchrones : https://www.julienpradet.fr/tutoriels/introduction-a-rxjs/
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  currentURL = 'https://jsonplaceholder.typicode.com/';

  constructor(
    private httpRequest: HttpClient,
  ) { }

  // Pour obtenir l'ensemble des posts
  getAllPost(): Observable<Post[]> {
    return this.httpRequest.get<Post[]>(this.currentURL + 'posts');
  }

  // Pour créer un nouveau post
  addPost( postData: Post):Observable<Post> {
    return this.httpRequest.post<Post>(this.currentURL + 'posts', postData);
  }

  // Pour éditer un post existant
  editPost( postData: Post, postId: number):Observable<Post> {
    return this.httpRequest.put<Post>(this.currentURL + 'posts/' + postId + '/', postData);
  }

  // Pour supprimer un post
  deletePost( postId: number):Observable<any> {
    return this.httpRequest.delete(this.currentURL + 'posts/' + postId);
  }
}
