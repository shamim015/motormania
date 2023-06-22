import React, { useEffect, useState } from 'react';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from '../../Shared/Footer/Footer';
const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://powerful-ravine-22225.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handelDelete = () => {
        alert("Do you want to delete this product?");
    }
    return (
        <div>
            <div id='services' className="home-container container mb-5">
                <h1 className="p-5 text-success  text">Manage All Product PRODUCTS</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {products
                        .map(products =>
                            <div className="col ">
                                <div className="card h-100">
                                    <img src={products.img} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h3 className="card-text">{products.name}</h3>
                                        <p>{products.description}</p>
                                        <h5>$ {products.price} </h5>
                                        <Button onClick={handelDelete} variant="success">Delete</Button>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ManageProducts;