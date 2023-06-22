import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const AddProduct = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        data.email = user?.email;
        fetch("https://powerful-ravine-22225.herokuapp.com/addProducts", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        alert("Product add successful");
        console.log(data);
    };
    return (
        <div className="bg-primary pb-5 py-3">
            <h1 className="mt-5 text-center  text-white">Add A New Product</h1>
            <div className=" w-25 m-auto mt-5">
                <div className=" d-flex justify-content-center align-items-center">
                    <div className="login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("name")}
                                placeholder="Product name"
                            />
                            <br />
                            <br />
                            <input
                                {...register("description")}
                                placeholder="Description"
                            />
                            <br />
                            <br />
                            <input
                                {...register("price")}
                                placeholder="Price"
                            />
                            <br />
                            <br />
                            <input
                                {...register("img", { required: true })}
                                placeholder="Image Link"
                            />
                            <br />
                            <br />
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" value="Add" className="btn btn-danger w-50" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
