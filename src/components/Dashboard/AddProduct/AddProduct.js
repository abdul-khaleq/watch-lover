import React from 'react';
import { useForm } from "react-hook-form";
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
    // console.log(watch("example")); 
    return (
        <div className="add-product">
            <form onSubmit={handleSubmit(onSubmit)}>

      <input type="text" defaultValue="name" {...register("name")} /> <br />
      <input type="text" defaultValue="description" {...register("description")} /> <br />
      <input type="text" defaultValue="image url" {...register("image")} /> <br />
      <input type="number" defaultValue="price" {...register("price")} /> <br />
      

      {/* <input {...register("exampleRequired", { required: true })} /> */}
      {/* {errors.exampleRequired && <span>This field is required</span>} */}
      
      <input className="btn btn-primary" type="submit" value="add product"/>
    </form>
  
        </div>
    );
};

export default AddProduct;