import { Component, OnInit } from '@angular/core';
import {Album} from '../album';
import {ProductService } from '../product.service';
@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {
  albumInfo:Album;
  constructor(private _productService:ProductService) { }

  subscribe = response => this.albumInfo = response;
  ngOnInit() {

    let yaya = this._productService.getAlbum(1);
    console.log(yaya);
    
    this.subscribe(yaya)
  }

}
