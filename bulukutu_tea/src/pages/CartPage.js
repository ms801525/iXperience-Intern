//THIS PAGE DISPLAYS THE ITEMS ADDED TO THE CART
//TO-DO
//it displays cart items once logged in -- so it only displays the individual user's login
//needs work around in
//the checkout and payment options
//Feel free to modify it as per how you think is best

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/Firebase";
import Button from "../components/common/ButtonFooter";
import "../styles/CartPage.css";
import OrdersService from "../services/orders.service";
import { AiOutlineShopping } from "react-icons/ai";
// import StripeContainer from "../components/StripeContainer";

// shopping cart page
// renders / process shopping cart functionality
export default function CartPage(props) {
  const [orders, setOrders] = useState([]);
  // const [showCart, setShowCart] = useState(false);
  //const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (props.user) {
      fetchOrders();
    }
  });

  async function fetchOrders() {
    const orders_var = await OrdersService.fetchOrders(props.user);
    setOrders(orders_var);
    props.setPrice(orders.reduce((a, v) => (a = a + v.price * v.quantity), 0) + 8)
    props.setCartOrder(orders_var)
  }

  async function onLogoutClicked() {
    await signOut(auth);
  }

  async function deleteOrder(orderid) {
    OrdersService.deleteOrder(orderid);
    setOrders(orders.filter((order) => order.orderid !== orderid));
    props.setPrice(orders.reduce((a, v) => (a = a + v.price * v.quantity), 0) + 8)
    props.setCartOrder(orders.filter((order) => order.orderid !== orderid))
  }

  return (
    <div>
      {/* {showCart ? (
        <StripeContainer
          cost={orders.reduce((a, v) => (a = a + v.price * v.quantity), 0)}
        />
      ) : ( */}
        <>
          {props.user ? (
            <div className="container mt-3 main-card">
              <div
                className="d-flex justify-content-left mb-3"
                onClick={onLogoutClicked}
                style={{ width: "fit-content" }}
              >
                <Button page="/cart">Logout</Button>
              </div>
              <div>
                <div className="w-100">
                  {orders.length > 0 ? (
                    <div className="card card-body border-secondary para">
                      <h2 className="card-title mb-5 mt-3 display-3">
                        Shopping Cart
                      </h2>
                      <table className=" table table-hover table-responsive-sm w-120">
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Cost</th>
                            <th>Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orders.map((order) => (
                            <tr key={order.orderid}>
                              <td>{order.name}</td>
                              <td>{order.quantity}</td>
                              <td>{order.price * order.quantity}</td>
                              <td
                                onClick={(e) => {
                                  deleteOrder(order.orderid);
                                }}
                              >
                                <Button page="" width="w-100">
                                  <i className="bi bi-trash"></i>
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <div className="container d-flex justify-content-between mb-3 ">
                        <h5 className="mb-0">Shipping Cost:</h5>
                        <h5 className="mb-0">ZAR 8</h5>
                      </div>

                      <hr></hr>

                      <div className="container d-flex justify-content-between mb-2">
                        <h5 className="fw-bold mb-0">Total:</h5>
                        <h5 className="fw-bold mb-0">
                          ZAR{" "}
                          {orders.reduce(
                            (a, v) => (a = a + v.price * v.quantity),
                            0
                          ) + 8}{" "}
                        </h5>
                      </div>

                      <div className="card-footer bg-transparent d-flex justify-content-between">
                        <Link
                          to="/products"
                          className="btn btn-outline-dark btn-md col-5"
                          style={{ width: 200, margin: 20 }}
                        >
                          Continue shopping
                        </Link>

                        <Link
                          to="/checkout"
                          className="btn btn-outline-dark btn-md col-5"
                          style={{ width: 200, margin: 20 }}
                        >
                          Checkout
                        </Link>

                        {/* change onClick to make Stripe Container it's own page */}

                        {/* <button
                          className="btn btn-outline-dark btn-md col-5"
                          onClick={() => setShowCart(true)}
                          style={{ width: 200, margin: 20 }}
                        >
                          Checkout
                        </button> */}
                      </div>
                    </div>
                  ) : (
                    <div className="card-body justify-content-center align-items-center">
                      <div className="d-block">
                        <AiOutlineShopping size={150} />
                        <h3>Your cart is empty.</h3>
                        <br></br>
                        <Link to="/products" className="btn btn-outline-dark">
                          Continue shopping
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="card-body m-4" style={{ alignItems: "center" }}>
              <Button size={"btn-xl"} page="/register">
                Register
              </Button>
              <Button size={"btn-xl"} page="/login">
                Login
              </Button>
            </div>
          )}
        </>
      {/* )} */}
    </div>
  );
}
