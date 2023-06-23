import React from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ criteriaMode: "all" });

    const handleSubmits = (data) => {
        localStorage.setItem("userLogin", JSON.stringify(data));
        return navigate('/');
    };
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <h2 className="text-center mb-4">Login</h2>
                    <form onSubmit={handleSubmit(handleSubmits)}>
                        <div className="form-group">
                            <label htmlFor="username">user Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                {...register('name', { required: true })}
                            />
                            {errors.name && <span className='text-danger' >This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                {...register('email', { required: true })}
                            />
                            {errors.email && <span className='text-danger' >This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className='text-danger'>This field is required</span>}
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
