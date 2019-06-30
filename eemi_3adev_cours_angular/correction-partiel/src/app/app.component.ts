import { Component } from '@angular/core';
import {DistribService} from './service/distrib.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  amount: number = 0;
  productSelected: number = null;

  showInfo: boolean = false;

  firstname: string = null;
  lastname: string = null;
  address: string = null;

  products: any = [
      {id: 1, name: 'iPhone XS', price: 2520},
      {id: 2, name: 'iMac 2018', price: 3652},
      {id: 3, name: 'Casque Beats', price: 1296},
      {id: 4, name: 'iPad 10', price: 210},
      {id: 5, name: 'Apple TV', price: 845},
      {id: 6, name: 'Mac Mini', price: 1815},
      {id: 7, name: 'iPod', price: 50},
      {id: 8, name: 'Apple Watch', price: 1530},
  ];

  constructor(
      private distribService: DistribService
  ) {

  }

  addPiece(piece) {
    this.amount += piece;
  }

  buy() {
    if (this.productSelected === null) {
        alert('Veuillez sélectionner un produit');
        return;
    }
    const product = this.products.find(pr => pr.id === this.productSelected);

    if (this.amount < product.price) {
        alert('Veuillez ajouter de l\'argent');
        return;
    } else if (this.amount > product.price) {
        alert('Veuillez faire l\'appoint');
        return;
    }
    this.showInfo = true;
  }

  submitInfo() {
      if (this.firstname.length < 2) {
          alert('Prénom trop court');
      } else if (this.lastname.length < 2) {
          alert('Nom trop court');
      } else if (this.address.length < 10) {
          alert('Adresse trop courte');
      } else {
          this.distribService.buy({
              idProduct: this.productSelected,
              amount: Math.round(this.amount * 100) / 10000,
              firstname: this.firstname,
              lastname: this.lastname,
              address: this.address,
          }).subscribe(
              (res: any) => {
               // all good
                  console.log(res);
              },
              (err: any) => {
                  // all broken
                  console.error(err);
              }
          );
      }
  }
}
