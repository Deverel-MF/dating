'use client';

import { useState } from 'react';

export default function HeroSection() {
  const [showSignup, setShowSignup] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    otp: '',
    name: '',
    age: '',
    gender: '',
    location: '',
    lookingFor: ''
  });
  const [step, setStep] = useState('initial'); // initial, verification, profile

  const handleCreateAccount = () => {
    setShowSignup(true);
  };

  const handleSubmitContact = (e) => {
    e.preventDefault();
    setStep('verification');
    // Add OTP sending logic here
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    setStep('profile');
  };

  const handleCompleteProfile = (e) => {
    e.preventDefault();
    alert("Welcome to T'emi! Your profile has been created.");
    setShowSignup(false);
  };

  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Beautiful%20African%20American%20couple%20smiling%20and%20looking%20at%20each%20other%20in%20modern%20urban%20setting%2C%20romantic%20atmosphere%2C%20warm%20lighting%2C%20professional%20photography%20style%2C%20contemporary%20casual%20clothing%2C%20genuine%20happiness%20and%20connection%2C%20urban%20backdrop%20with%20architectural%20elements&width=1200&height=800&seq=hero-bg-001&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200/80 to-purple-200/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            T'emi, the love you've been waiting for.
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            The first dating platform dedicated to African Christians looking for sincere, deep and loving relationships.
          </p>
          <button 
            onClick={handleCreateAccount}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
          >
            Create My Free Account
          </button>
          <p className="text-sm text-gray-600 mt-4">
            "We Love Because He First Loved Us" - 1 John 4:19
          </p>
        </div>
      </div>

      {showSignup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-purple-600">Join T'emi</h2>
              <button 
                onClick={() => setShowSignup(false)}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {step === 'initial' && (
              <form onSubmit={handleSubmitContact} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="text-center text-gray-500">OR</div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors cursor-pointer"
                >
                  Send Verification Code
                </button>
              </form>
            )}

            {step === 'verification' && (
              <form onSubmit={handleVerifyOTP} className="space-y-4">
                <p className="text-gray-700">
                  We've sent a verification code to {formData.email || formData.phone}
                </p>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Verification Code</label>
                  <input 
                    type="text" 
                    value={formData.otp}
                    onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                    className="w-full border rounded-lg px-4 py-3 text-center text-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter 6-digit code"
                    maxLength={6}
                    required
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors cursor-pointer"
                >
                  Verify Code
                </button>
              </form>
            )}

            {step === 'profile' && (
              <form onSubmit={handleCompleteProfile} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Age</label>
                  <input 
                    type="number" 
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    min="18" max="100" required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Gender</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={(e) => setFormData({ ...formData, gender: e.target.value })} className="mr-2" />
                      Male
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={(e) => setFormData({ ...formData, gender: e.target.value })} className="mr-2" />
                      Female
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Location</label>
                  <input 
                    type="text" 
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your city/country"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Looking For</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input type="radio" name="lookingFor" value="male" checked={formData.lookingFor === 'male'} onChange={(e) => setFormData({ ...formData, lookingFor: e.target.value })} className="mr-2" />
                      Male
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="lookingFor" value="female" checked={formData.lookingFor === 'female'} onChange={(e) => setFormData({ ...formData, lookingFor: e.target.value })} className="mr-2" />
                      Female
                    </label>
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors cursor-pointer"
                >
                  Complete Profile
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
