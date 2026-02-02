import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'; // Import toast

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5001/api/v1/auth/signup', formData);
      localStorage.setItem('token', res.data.token);
      toast.success('Account created successfully!'); // Success toast
      navigate('/dashboard');
    } catch (err) {
      console.error(err.response);
      toast.error(err.response?.data?.msg || 'Error registering user'); // Error toast
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={onSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4 font-bold">Sign Up</h2>
        <input type="text" name="name" placeholder="Name" onChange={onChange} className="w-full p-2 mb-4 border rounded" required />
        <input type="email" name="email" placeholder="Email" onChange={onChange} className="w-full p-2 mb-4 border rounded" required />
        <input type="password" name="password" placeholder="Password" onChange={onChange} className="w-full p-2 mb-4 border rounded" required />
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition">Sign Up</button>
        <p className="mt-4 text-sm">Already have an account? <Link to="/" className="text-blue-500 hover:underline">Login</Link></p>
      </form>
    </div>
  );
};

export default Signup;