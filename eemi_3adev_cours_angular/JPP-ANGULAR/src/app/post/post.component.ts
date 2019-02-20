import { Component, OnInit } from '@angular/core';
// Import du service pour faire les call API
import { PostService } from '../services/post.service';
// Import de la snackbar pour afficher les informations de façon jolies
import { MatSnackBar } from '@angular/material';
// Import des dialog pour faire des dialog sympas
import { MatDialog } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
// Import du model de post pour avoir un truc cohérent
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {

  posts: Array<Post> = [];

  // Création PostService, Snackbar, MatDialog et l'autoriser sur tous les posts
  constructor(
    private postService: PostService,
    private snackBar: MatSnackBar,
    private matDiaog: MatDialog,

  ) {
    this.getAllPosts();
  }

  // Fetching le détails des posts
  getAllPosts() {
    this.postService.getAllPost()
      .subscribe((result: Post[]) => {
        if (result != null && result !== undefined && result !== []) {
          this.posts = result;
        }
      });
  }
  // Ouvre un dialog pour l'ajout et l'édition de post
  openPostDialog(mode: string, post: Post) {
    const dialogRef = this.matDiaog.open( DialogBoxComponent, {
      width: '500px',
    });
    dialogRef.componentInstance.postDetails = mode === 'edit' ? post : null;
    dialogRef.componentInstance.postMode = mode;
    // Getting new Post after closing dialog
    dialogRef.afterClosed().subscribe(result => {
        this.getAllPosts();
    });
  }
  // Supprimer le post séléctionné
  deletePost(postId: number) {
    if (postId != null && postId !== undefined) {
      this.postService.deletePost(postId)
        .subscribe((result: any) => {

          // Revenir à la page de l'ensemble des post après la suppression d'un post
          this.getAllPosts();
          if (result != null && result !== undefined) {
            this.snackBar.open('Post supprimé avec succès !', '', {
              duration: 2000,
            });
          }
        });
    }
  }
  ngOnInit() {
  }
}
