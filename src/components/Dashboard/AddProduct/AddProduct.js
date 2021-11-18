import React from 'react';
import { useForm } from "react-hook-form";
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        fetch("https://afternoon-shelf-50405.herokuapp.com/products", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(result => console.log(result));
        console.log(data)
        alert("has been added")
    }; 
    return (
        <div>
            <DashboardHeader/>
            <div className="add-product"> <br />
                <h2>Add a product to explore page</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" defaultValue="name" {...register("name")} /> <br />
      <input type="text" defaultValue="description" {...register("description")} /> <br />
      <input type="text" defaultValue="image url" {...register("image")} /> <br />
      <input type="number" defaultValue="price" {...register("price")} /> <br />
      <input className="btn btn-primary" type="submit" value="add product"/>
    </form>
        </div>
        </div>
    );
};

export default AddProduct;