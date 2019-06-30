import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  formElements: any = {
    firstname: [null, [Validators.required, Validators.minLength(2)]],
    nbPerson: [1, Validators.required, Validators.min(1), Validators.max(4)],
  };

  formGroup: FormGroup;

  constructor(
      private fb: FormBuilder
  ) {

  }

  ngOnInit(): void {

    this.formGroup = this.fb.group(this.formElements);

    // modifie des valeurs
      this.formGroup.patchValue({
          firstname: 'toto'
      });

      // remettre à 0
      this.formGroup.reset();

      // Modifier validators d'un control
      this.formGroup.controls.firstname.clearValidators(); // retire les validators

      // modifier les validators
      this.formGroup.controls.firstname.setValidators([
          Validators.required
      ]);

      // update valeurs côté front
      this.formGroup.controls.firstname.updateValueAndValidity();
  }

  submit() {
    console.log( this.formGroup.value );
  }

}
