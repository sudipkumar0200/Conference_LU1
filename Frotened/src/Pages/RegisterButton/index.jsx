import React, { useState, useEffect } from 'react';
import Logo from '/src/assets/Lu-old.webp';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';

const RegisterButton = ({ className }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    place: '',
    address: '',
    password: '',
    confirmPassword: '' 
  });

  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch(`${process.env.API_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('You have registered successfully! Redirecting to home...');

        setFormData({
          name: '',
          email: '',
          phone: '',
          organization: '',
          place: '',
          address: '',
          password: '',
          confirmPassword: '', 
        });

        setTimeout(() => {
          navigate('/');
        }, 3000);
      } else {
        toast.error(data.message || 'Registration failed');
      }
    } catch (err) {
      toast.error('An error occurred. Please try again.');
    }
  };

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate__fadeIn');
      }, index * 500);
    });
  }, []);

  return (
    <div className='flex items-center bg-gray-200 h-full w-full'>
      
    <div className="p-2 z-50 transition-opacity duration-500 ease-in-out opacity-100 w-full">
        <div className=" p-10 fade-in animate__animated animate__fadeInRight w-full opacity-100">
          <h2 className="text-xl font-bold mb-4 text-center md:text-4xl text-red-900">Register</h2>
          <form onSubmit={handleSubmit} className='grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-8'>
            <div className="mb-4">
              <label className="text-sm font-semibold md:text-xl">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border-2 border-gray-300 rounded-md "
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold md:text-xl">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border-2 border-gray-300 rounded-md"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold md:text-xl">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-3 border-2 border-gray-300 rounded-md"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold md:text-xl">Affiliating Organization</label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleInputChange}
                className="w-full p-3 border-2 border-gray-300 rounded-md"
                placeholder="Enter your organization"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold md:text-xl">Place (City/Town)</label>
              <input
                type="text"
                name="place"
                value={formData.place}
                onChange={handleInputChange}
                className="w-full p-3 border-2 border-gray-300 rounded-md"
                placeholder="Enter your place"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold md:text-xl">Postal Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-3 border-2 border-gray-300 rounded-md"
                placeholder="Enter your postal address"
              ></textarea>
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label className="block text-sm font-semibold md:text-xl">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full p-3 border-2 border-gray-300 rounded-md"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-lg"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Show or Hide icon */}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="mb-4">
              <label className="block text-sm font-semibold md:text-xl">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full p-3 border-2 border-gray-300 rounded-md"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-lg"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />} {/* Show or Hide icon */}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 font-bold text-white py-3 rounded-md fade-in animate__animated animate__zoomIn col-span-2 mx-auto w-[150px]"
            >
              Register
            </button>
          </form>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default RegisterButton;