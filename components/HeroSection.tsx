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

  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('verification');
    // Send OTP logic here
  };

  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('profile');
  };

  const handleCompleteProfile = (e: React.FormEvent) => {
    e.preventDefault();
    // Complete signup and redirect to dashboard
    alert('Welcome to T\'emi! Your profile has been created.');
    setShowSignup(false);
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Beautiful%20African%20American%20couple%20smiling%20and%20looking%20at%20each%20other%20in%20modern%20urban%20setting%20with%20glass%20buildings%2C%20romantic%20atmosphere%2C%20warm%20lighting%2C%20professional%20photography%20style%2C%20contemporary%20casual%20clothing%2C%20genuine%20happiness%20and%20connection%2C%20urban%20backdrop%20with%20architectural%20elements&width=1200&height=800&seq=hero-bg-001&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200/80 to-purple-200/60"></div>
      </div>

      {/* Content */}
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

      {/* Search Bar */}
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Find Your Perfect Match</h3>
              <p className="text-purple-100">Discover someone who shares your values and faith</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
              <div className="space-y-2">
                <label className="text-white text-sm font-medium block">I'm looking for</label>
                <div className="relative">
                  <select className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white text-sm appearance-none cursor-pointer pr-8">
                    <option value="all" selected="">Everyone</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                  </select>
                  <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-white w-4 h-4 flex items-center justify-center pointer-events-none">
                  </i>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-white text-sm font-medium block">Age Range</label>
                <div className="flex items-center space-x-2">
                  <input type="number" min="18" max="65" className="w-16 bg-white/20 border border-white/30 rounded-lg px-2 py-3 text-white text-sm text-center" value="25">
                  <span className="text-white">-</span>
                  <input type="number" min="18" max="65" className="w-16 bg-white/20 border border-white/30 rounded-lg px-2 py-3 text-white text-sm text-center" value="35">
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-white text-sm font-medium block">Language</label>
                <div class="relative">
                  <select className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white text-sm appearance-none cursor-pointer pr-8">
                    <option value="english" selected="">English</option>
                    <option value="french">French</option>
                    <option value="spanish">Spanish</option>
                    <option value="portuguese">Portuguese</option>
                  </select>
                  <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-white w-4 h-4 flex items-center justify-center pointer-events-none">
                  </i>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-white text-sm font-medium block">Location</label>
                <div className="relative">
                  <input type="text" placeholder="City or Country" className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white text-sm placeholder-white/70" value="">
                  <i className="ri-map-pin-line absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 w-4 h-4 flex items-center justify-center">
                  </i>
                </div>
              </div>
              
              <div className="flex items-end">
                <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-purple-800 px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer shadow-lg">
                  <i className="ri-heart-3-fill mr-2 w-4 h-4 inline-flex items-center justify-center">
                  </i>
                  Find Love
                </button>
              </div>
            </div>
            <div className="flex justify-center space-x-6 text-center">
              <div className="text-white">
                <div className="text-2xl font-bold">10,000+</div>
                <div className="text-sm text-purple-100">Active Members</div>
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-purple-100">Success Stories</div>
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm text-purple-100">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signup Modal */}
      {showSignup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-purple-600">Join T'emi</h2>
              <button 
                onClick={() => setShowSignup(false)}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>

            {step === 'initial' && (
              <form onSubmit={handleSubmitContact}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
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
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Send Verification Code
                  </button>
                </div>
              </form>
            )}

            {step === 'verification' && (
              <form onSubmit={handleVerifyOTP}>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    We've sent a verification code to {formData.email || formData.phone}
                  </p>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Verification Code</label>
                    <input 
                      type="text" 
                      name="otp"
                      value={formData.otp}
                      onChange={(e) => setFormData({...formData, otp: e.target.value})}
                      className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-center text-2xl"
                      placeholder="Enter 6-digit code"
                      maxLength={6}
                      required
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Verify Code
                  </button>
                </div>
              </form>
            )}

            {step === 'profile' && (
              <form onSubmit={handleCompleteProfile}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Age</label>
                    <input 
                      type="number" 
                      name="age"
                      value={formData.age}
                      onChange={(e) => setFormData({...formData, age: e.target.value})}
                      className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter your age"
                      min="18"
                      max="100"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Gender</label>
                    <div className="flex space-x-4">
                      <label className="flex items-center cursor-pointer">
                        <input 
                          type="radio" 
                          name="gender" 
                          value="male"
                          checked={formData.gender === 'male'}
                          onChange={(e) => setFormData({...formData, gender: e.target.value})}
                          className="mr-2"
                        />
                        Male
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input 
                          type="radio" 
                          name="gender" 
                          value="female"
                          checked={formData.gender === 'female'}
                          onChange={(e) => setFormData({...formData, gender: e.target.value})}
                          className="mr-2"
                        />
                        Female
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Location</label>
                    <input 
                      type="text" 
                      name="location"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter your city/country"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Looking For</label>
                    <div className="flex space-x-4">
                      <label className="flex items-center cursor-pointer">
                        <input 
                          type="radio" 
                          name="lookingFor" 
                          value="male"
                          checked={formData.lookingFor === 'male'}
                          onChange={(e) => setFormData({...formData, lookingFor: e.target.value})}
                          className="mr-2"
                        />
                        Male
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input 
                          type="radio" 
                          name="lookingFor" 
                          value="female"
                          checked={formData.lookingFor === 'female'}
                          onChange={(e) => setFormData({...formData, lookingFor: e.target.value})}
                          className="mr-2"
                        />
                        Female
                      </label>
                    </div>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Complete Profile
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}