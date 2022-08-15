import React, { useEffect } from "react";

// stylesheet

import { Order } from "../models/order";
import OrdersService from "../services/orders.service"


export default function confirmationPage(props) {
    const [orders, setOrders] =  useState([]);

    useEffect(() => {
        if (props.user) {
            fetchOrders();
        }
    });

    async function fetchOrders() {
        const orders_var = await OrdersService.fetchOrders(props.user);
        setOrders(orders_var);
    }

    return (
    <div className="container mt-4">
        <h1>Order Confirmation: </h1>
        <div className="card card-body">
            { orders.map((order) => (order.name), (order.quantity)) }
        <h2>Shipping Information</h2>
        <div className="card card-body">
            Estimated Arrival:
        </div>
        </div>
    </div>
    )

}