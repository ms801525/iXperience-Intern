// buying for me page

import React from "react";
import Button from '../components/common/Button'
import { Order } from "../models/order";
import { Product } from "../products/models/products";

//import stylesheet
import '../styles/buyingForMe.css'

export default function buyingForMePage() {
    <div class="container mt-4">
    <div class="header">
        Buying For Business
    </div>
    <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="..."></img>
        <div class="card-body">
      <h5 class="card-title">Bulukutu Tea Bags</h5>
      <p class="card-text"></p>
      <a href="#" class="btn btn-primary">See Product</a>
        </div>
    </div>

    <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="..."></img>
        <div class="card-body">
      <h5 class="card-title">Bulukutu Tea Leaves</h5>
      <p class="card-text"></p>
      <a href="#" class="btn btn-primary">See Product</a>
        </div>
    </div>
</div>

}