const React = require("react");
import { Button } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import PaymentCards from "../AccountView/PaymentCards";
import CheckedOut from "./CheckedOut";

const PaymentSite = () => {
    const [name, setName] = useState();
    const [fullName, setFullName] = useState();
    const [cardnumber, setCardNumber] = useState();
    const [date, setDate] = useState();
    const [cvv, setCVV] = useState();
    const [shippingAddress, setShippingAddress] = useState();
    const [checkedOut, setCheckedOut] = useState(false);

    useEffect(() => {
        const getName = async () => {
            const { data } = await axios.get("/api/users/user");
            setName(data.name)
        };
        getName()
    }, [checkedOut]);

    const handleSelect = async (e) => {
        e.preventDefault();
        console.log("i am checkbox and i have been selected")
    }
    const handleCreditCard = async (e) => {
        e.preventDefault();
        console.log("hello there!")
    }

    const handleCheckout = async (e) => {
        e.preventDefault();
        setCheckedOut(true);
        console.log("i have been checked out!")
    }
    const handleEdit = async (e) => {
        e.preventDefault();
        console.log("i have been edited wee!")
    }

    return (
        !checkedOut ?
            <>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 mb-lg-0 mb-3">
                            <div class="card p-3">
                                <div class="img-box">
                                    <img src="https://www.freepnglogos.com/uploads/visa-logo-download-png-21.png" alt="" />
                                </div>
                                <div class="number">
                                    <label class="fw-bold" for="">**** **** **** 1060</label>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <small><span class="fw-bold">Expiry date:</span><span>10/16</span></small>
                                    <small><span class="fw-bold">Name:</span><span>{name}</span></small>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="check2" name="option2" />
                                        <small><label class="form-check-label" for="check2">Select Payment Method</label></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-lg-0 mb-3">
                            <div class="card p-3">
                                <div class="img-box">
                                    <img src="https://www.freepnglogos.com/uploads/mastercard-png/file-mastercard-logo-svg-wikimedia-commons-4.png"
                                        alt="" />
                                </div>
                                <div class="number">
                                    <label class="fw-bold">**** **** **** 1060</label>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <small><span class="fw-bold">Expiry date:</span><span>10/16</span></small>
                                    <small><span class="fw-bold">Name:</span><span>{name}</span></small>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something" />
                                        <small><label class="form-check-label" for="check2">Select Payment Method</label></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-lg-0 mb-3">
                            <div class="card p-3">
                                <div class="img-box">
                                    <img src="https://www.freepnglogos.com/uploads/discover-png-logo/credit-cards-discover-png-logo-4.png"
                                        alt="" />
                                </div>
                                <div class="number">
                                    <label class="fw-bold">**** **** **** 1060</label>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <small><span class="fw-bold">Expiry date:</span><span>10/16</span></small>
                                    <small><span class="fw-bold">Name:</span><span>{name}</span></small>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something" />
                                        <small><label class="form-check-label" for="check2">Select Payment Method</label></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 mt-4">
                            <div class="card p-3">
                                <p class="mb-0 fw-bold h4">Payment Methods</p>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="card p-3">
                                <div class="card-body border p-0">
                                    <p>
                                        <a class="btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between"
                                            role="button" aria-expanded="true">
                                            <span class="fw-bold">Credit Card</span>
                                        </a>
                                    </p>
                                    <div class="collapse show p-3 pt-0">
                                        <div class="row">
                                            <div class="col-lg-5 mb-lg-0 mb-3">
                                                <p class="h4 mb-0">Summary</p>
                                                <p class="mb-0"><span class="fw-bold">Product:</span><span class="c-green">: Name of
                                                    product</span>
                                                </p>
                                                <p class="mb-0">
                                                    <span class="fw-bold">Price:</span>
                                                    <span class="c-green">:$452.90</span>
                                                </p>
                                                <p class="mb-0">
                                                    This should show a little version of the cart.

                                                </p>
                                            </div>
                                            <div class="col-lg-7">
                                                <form action="" class="form">
                                                    <div class="row">

                                                        <div class="col-12">
                                                            <div class="form__div">
                                                                <input type="text" class="form-control" value={fullName} />
                                                                <label for="" class="form__label">Full Name</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="form__div">
                                                                <input type="text" class="form-control" value={cardnumber} />
                                                                <label for="" class="form__label">Card Number</label>
                                                            </div>
                                                        </div>

                                                        <div class="col-6">
                                                            <div class="form__div">
                                                                <input type="text" class="form-control" value={date} />
                                                                <label for="" class="form__label">MM/YYYY</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div class="form__div">
                                                                <input type="password" class="form-control" value={cvv} />
                                                                <label for="" class="form__label">CVV Code</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <Button variant="primary" onClick={handleCreditCard}>Submit</Button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="card p-3">
                                <div class="card-body border p-0">
                                    <p>
                                        <a class="btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between"
                                            role="button" aria-expanded="true"
                                        >
                                            <span class="fw-bold">Shipping Address</span>
                                        </a>
                                    </p>
                                    <div class="collapse show p-3 pt-0">
                                        <div class="row">
                                            <div class="col-lg-5 mb-lg-0 mb-3">
                                                <p class="h4 mb-0">Shipping Address</p>
                                            </div>
                                            <div class="col-lg-7">
                                                <form action="" class="form">
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <div class="form__div">
                                                                <label for="" class="form__label">Shipping Address</label>
                                                                <input type="text" class="form-control" placeholder=" " />
                                                            </div>
                                                        </div>

                                                        <div class="col-12">
                                                            <div class="form__div">
                                                                <label for="" class="form__label">Full Legal Name</label>
                                                                <input type="text" class="form-control" placeholder=" " />

                                                            </div>
                                                        </div>


                                                        <div class="col-12">
                                                            <div class="form__div">
                                                                <label for="" class="form__label">Country </label>
                                                                <input type="text" class="form-control" placeholder=" " />

                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="form__div">
                                                                <label for="" class="form__label">Cell Phone </label>
                                                                <input type="text" class="form-control" placeholder=" " />

                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <Button variant="primary" onClick={handleEdit}>Submit</Button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="btn btn-primary payment">
                                <Button variant="primary" onClick={handleCheckout}>Checkout Order</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </> : <CheckedOut />
    )

};
export default PaymentSite;