import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './UserReview.css';

const UserReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://afternoon-shelf-50405.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added review successfully');
                    reset();
                }
            })

    }
    return (
        <div className="container" style={{ marginTop: 100 }}>
            <div className="row mt-5" >
                <div className="col-lg-6 col-md-6 col-12">
                    <div class="card text-center">
                        <div class="card-body">
                            <p class="card-text text-center">Your Support</p>

                            <div className="info">
                                <form className="reviews" onSubmit={handleSubmit(onSubmit)}>
                                    <input required {...register("name")} defaultValue={user?.displayName} />
                                    <input required type="email" {...register("email")} defaultValue={user?.email} />

                                    <input required type="number" {...register("rating", { min: 1, max: 5 })} placeholder="Rating must be 1 to 5" />
                                    <textarea required type="text" {...register("sDescription")} placeholder="Short Description"></textarea>
                                    
                                    <input className="btn btn-primary" type="submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <img src={`https://i.ibb.co/xLJwc8j/undraw-Filing-system-re-56h6.png`} alt="" height="200px" />
                </div>
            </div>
            <br /><br />
        </div>
    );
};

export default UserReview;