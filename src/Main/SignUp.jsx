import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    // Save user to localStorage
    localStorage.setItem('user', JSON.stringify({
      email: formData.email,
      password: formData.password
    }));

    alert('Signup successful!');
    navigate('/'); // Redirect to login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80 space-y-4">
        <h2 className="text-xl font-bold text-center">Sign Up</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <button className="w-full bg-indigo-600 text-white p-2 rounded">Sign Up</button>

        <p className="text-sm text-center">
          Already have an account? <Link to="/" className="text-indigo-600">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
