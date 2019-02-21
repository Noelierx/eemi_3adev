import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import {ApiPostService} from '../service/api-post.service';

@Component({
    selector: 'app-distributor',
    templateUrl: './distributor.component.html',
    styleUrls: ['./distributor.component.scss']
})
export class DistributorComponent implements OnInit {
    total = null;

    productId: number;
    priceProduct: number;
    
    registerForm = new FormGroup({
        firstname: new FormControl('', Validators.minLength(2)),
        lastname: new FormControl('', Validators.minLength(2)),
        address: new FormControl('', Validators.minLength(10)),
    });

    items: any = [
        {
            id: 1,
            title: 'iPhone XS',
            price: 25.20
        },
        {
            id: 2,
            title: 'iMac 2018',
            price: 36.52
        },
        {
            id: 3,
            title: 'Casque Beats',
            price: 12.96
        },
        {
            id: 4,
            title: 'iPad 10”',
            price: 2.10
        },
        {
            id: 5,
            title: 'Apple TV',
            price: 8.45
        },
        {
            id: 6,
            title: 'Mac Mini',
            price: 18.15
        },
        {
            id: 7,
            title: 'iPod',
            price: 0.50
        },
        {
            id: 8,
            title: 'Apple Watch',
            price: 15.30
        }
    ];

    addMoney(a: number) {
        this.total = this.total + a;
        console.log(this.total);
        return this.total;
    }

    comparePrice(prix: number, id: number) {

        console.log(id);

        this.productId = id;
        this.priceProduct = prix;

        const money = this.total / 100;

        if (money === prix) {

            // return this.route.navigate(['form']);
        } else if (money <= prix) {
            console.log('le montant est inférieur');
        } else {
            console.log('le montant est supérieur');
        }
    }



    constructor(
        private route: Router,
        private service: ApiPostService
    ) { }

    ngOnInit() {
        this.total = 0;

    }

    onSubmit() {

        const val = Object.assign({idProduct : this.productId, amount: this.priceProduct}, this.registerForm.value);
        return this.service.create(val).subscribe(
            (response) => console.log(response),
            error => console.error(error)

        );
    }

}
