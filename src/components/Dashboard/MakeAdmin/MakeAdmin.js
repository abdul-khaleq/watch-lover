import { Alert } from 'react-bootstrap';
import React, {useState } from 'react';
import useAuth from '../../hooks/useAuth';
import DashboardHeader from '../DashboardHeader/DashboardHeader';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://afternoon-shelf-50405.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <DashboardHeader/>
            <div className="container mt-5">
            <h1>Make A Admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <div class="input-group mb-3">
                    <input type="email"
                        onBlur={handleOnBlur}
                        className="form-control" placeholder="Enter Make A Admin Email" />
                    <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Make Admin</button>
                </div>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
            <br /><br />
        </div>
        </div>
    );
};

export default MakeAdmin;