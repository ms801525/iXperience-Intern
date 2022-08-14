//THIS PAGE DISPLAYS THE ITEMS ADDED TO THE CART
//TO-DO
  //it displays cart items once logged in -- so it only displays the individual user's login
  //needs work around in
    //the checkout and payment options
    //Feel free to modify it as per how you think is best

    
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/Firebase';
import Button from '../components/common/ButtonFooter';
import '../styles/CartPage.css'
import OrdersService from '../services/orders.service'
import { AiOutlineShopping } from 'react-icons/ai';

// shopping cart page
// renders / process shopping cart functionality
export default function CartPage(props) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (props.user){
      fetchOrders();
    }
  });

  async function fetchOrders() {
    const orders_var = await OrdersService.fetchOrders(props.user);
    setOrders(orders_var);
  }

  async function onLogoutClicked() {
      await signOut(auth);
  }

  async function deleteOrder(orderid) {
    OrdersService.deleteOrder(orderid);
    setOrders(orders.filter((order) => order.orderid !== orderid));
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
                <div>
                  <table className='table w-100'>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Cost</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                      orders.map((order) => 
                        <tr key={order.orderid}>
                          <td>{order.name}</td>
                          <td>{order.quantity}</td>
                          <td>{order.price * order.quantity}</td>
                          <td onClick={(e) => {deleteOrder(order.orderid)}}>
                            <Button page="" width="w-100">
                              <i className="bi bi-trash"></i>
                            </Button>
                          </td>
                        </tr>)
                      }       
                      </tbody>
                    </table>
                    <div className='card-body row p-4'>
                    <Link to="/products" className="btn btn-outline-dark col-6 col-sm-3">
                        Continue shopping
                      </Link>
                      <Link to="" className="btn btn-outline-dark col-6 col-sm-3">
                        Checkout
                      </Link>
                    </div>
                  </div>
                  :
                  <div className='card-body justify-content-center align-items-center'>
                    <div className='d-block'>
                    <AiOutlineShopping size={150}/>
                    <h3>Your cart is empty.</h3>
                    <br></br>
                    <Link to="/products" className="btn btn-outline-dark">
                        Continue shopping
                      </Link>
                    </div>
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
