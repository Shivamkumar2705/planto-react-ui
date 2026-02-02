import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'; // Import toast

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5001/api/v1/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      toast.success('Login Successful!'); // Success toast
      navigate('/dashboard');
    } catch (err) {
      console.error(err.response);
      toast.error(err.response?.data?.msg || 'Invalid Credentials'); // Error toast
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={onSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4 font-bold">Login</h2>
        <input type="email" name="email" placeholder="Email" onChange={onChange} className="w-full p-2 mb-4 border rounded" required />
        <input type="password" name="password" placeholder="Password" onChange={onChange} className="w-full p-2 mb-4 border rounded" required />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">Login</button>
        <p className="mt-4 text-sm">Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link></p>
      </form>
    </div>
  );
};

export default Login;