import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/Firebase';
import Button from '../components/common/ButtonFooter';
import '../styles/CartPage.css'
import OrdersService from '../services/orders.service'

export default function CartPage(props) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (props.user){
      fetchOrders();
    }
  }, []);

  async function fetchOrders() {
    const orders_var = await OrdersService.fetchOrders(props.user);
    setOrders(orders_var);
    console.log("orders: ", orders);
    console.log("orders_var", orders_var);
  }

  async function onLogoutClicked() {
      await signOut(auth);
    }
    
  return (
    <div>
    {
        props.user ?
        <div>
          <div onClick={onLogoutClicked} style={{width:"fit-content"}} >
              <Button page="/cart">
                  Logout
              </Button>
          </div>
          <div>
            <div className='w-100'>
              {
                orders.length > 0 ?
                  <table className='table w-100'>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                      orders.map((order) => 
                        <tr key={order.orderid}>
                          <td>{order.name}</td>
                          <td>{order.quantity}</td>
                          <td>{order.price * order.quantity}</td>
                        </tr>)
                      }       
                    </tbody>
                  </table>
                  :
                  <div className='card-body'>
                    Your cart is empty.
                  </div>
              }
            </div>
          </div>
        </div>
        :
        <div className="card-body m-4" style={{alignItems: 'center'}}>
            <Button size={"btn-xl"} page="/register">Register</Button>
            <Button size={"btn-xl"} page='/login'>Login</Button>
        </div>
      }
    </div>
  )
}
