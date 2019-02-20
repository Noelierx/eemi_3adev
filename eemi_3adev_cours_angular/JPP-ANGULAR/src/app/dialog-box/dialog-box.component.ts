import { Component, OnInit } from '@angular/core';
// Import des snackbars (est-ce encore utile de le dire?)
import { MatSnackBar, MatDialogRef } from '@angular/material';
// Import du FormControl et des validators
import { FormGroup, FormControl, Validators } from '@angular/forms';
// Import du post model pour vérifier que tout ça va être conforme à ce qu'on attends
import { Post } from '../models/post.model';
// Oui il ne faut pas oublier l'import des PostService pour les requêtes
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})

export class DialogBoxComponent implements OnInit {
  pageTitle = 'Nouveau Post';
  postForm: FormGroup;
  postDetails: Post = new Post();
  postMode = '';

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    private matSnackbar: MatSnackBar,
    private postService: PostService,
  ) {
    this.initForm();
  }

  // Initialisation du formulaire
  initForm() {
    this.postForm = new FormGroup({
      title: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required),
      userId: new FormControl('', Validators.required),
    });
  }

  // Créer un nouveau post
  createPost() {
    const data = this.postForm.value;

    this.postService.addPost(data)
      .subscribe(result => {

        if (result != null && result !== undefined && result) {
          this.matSnackbar.open('Le Post a été créé avec succès !' , '', { duration: 2000 });
          this.dialogRef.close();
        } else {
          this.matSnackbar.open('Essayez plus tard.' , 'Réessayez', { duration: 2000 });
        }
      });
  }

  // Editer un post existant
  editPost() {
    const data = this.postForm.value;

    this.postService.editPost(data, this.postDetails.id)
      .subscribe(result => {

        if (result != null && result !== undefined && result) {
          this.matSnackbar.open('Le post a été modifié avec succès !' , '', { duration: 2000 });
          this.dialogRef.close();
        } else {
          this.matSnackbar.open('Essayez plus tard.' , 'Réessayez', { duration: 2000 });
        }
      });
  }

  ngOnInit() {
    this.pageTitle = this.postMode === 'new' ? 'New Post' : 'Edit Post';

    if (this.postMode === 'edit' && this.postDetails != null && this.postDetails !== undefined) {
      this.postForm.reset({
        title: this.postDetails.title,
        body: this.postDetails.body,
        userId: this.postDetails.userId,
      });

    }
  }

}
