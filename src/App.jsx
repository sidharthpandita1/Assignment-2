import React from 'react';
import { Heart, Award, Leaf, Stethoscope } from 'lucide-react';

import dogBowlImage from './assets/dog-bowl.png'
import happyDogImage from './assets/happy-dog.png';
import dogsEatingImage from './assets/dogs-eating.png';
import kibbleImage from './assets/kibble.png';

export default function DogFoodLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-3">
            What makes us different
          </h1>
          <p className="text-3xl md:text-4xl text-center text-gray-800 mb-12">
            makes them stronger
          </p>
          
          {/* Desktop Layout - 3 Column Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-12 items-center mb-12">
            {/* Left Features */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Real Food</h3>
                  <p className="text-gray-600 text-sm">
                    Wholesome recipes for dogs with real meat and veggies.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-full flex-shrink-0">
                  <Award className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Premium Ingredient</h3>
                  <p className="text-gray-600 text-sm">
                    Elevating pet care with unmatched safety and quality.
                  </p>
                </div>
              </div>
            </div>

            {/* Center Image */}
            <div className="flex justify-center">
              <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <img src={dogBowlImage} alt="Fresh dog food bowl" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Right Features */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Made Fresh</h3>
                  <p className="text-gray-600 text-sm">
                    We prioritize maintaining the integrity of whole foods and nutrition.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
                  <Stethoscope className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Vet Developed</h3>
                  <p className="text-gray-600 text-sm">
                    We raise the bar for dog nutrition, surpassing industry expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-8 mb-12">
            <div className="flex justify-center mb-8">
              <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <img src={dogBowlImage} alt="Fresh dog food bowl" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Real Food</h3>
                <p className="text-gray-600 text-sm">
                  Wholesome recipes for dogs with real meat and veggies.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-yellow-100 p-3 rounded-full flex-shrink-0">
                <Award className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Premium Ingredient</h3>
                <p className="text-gray-600 text-sm">
                  Elevating pet care with unmatched safety and quality.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Made Fresh</h3>
                <p className="text-gray-600 text-sm">
                  We prioritize maintaining the integrity of whole foods and nutrition.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
                <Stethoscope className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Vet Developed</h3>
                <p className="text-gray-600 text-sm">
                  We raise the bar for dog nutrition, surpassing industry expectations.
                </p>
              </div>
            </div>
          </div>

{/* CTA Button */}
          <div className="text-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg mb-4 transition-colors">
              Get your dog's healthy meal today!
            </button>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">30-day money back guarantee</span>
              </span>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-3">
                {/* PayPal */}
                <img src="https://www.paypalobjects.com/webstatic/icon/pp258.png" alt="PayPal" className="h-6" />
                
                {/* Visa */}
                <svg className="h-6" viewBox="0 0 48 32" fill="none">
                  <rect width="48" height="32" rx="4" fill="#1434CB"/>
                  <path d="M19.5 10h-3.2l-2 12h2l2-12zm8.5 7.8c0-1.6-2-1.7-2-2.4 0-.2.2-.4.7-.5.5 0 1.3.1 1.9.4l.3-1.8c-.5-.2-1.2-.3-2-.3-2.1 0-3.6 1.1-3.6 2.7 0 1.2 1 1.8 1.8 2.2.8.4 1.1.7 1.1 1 0 .5-.6.7-1.1.7-.9 0-1.4-.1-2.2-.5l-.3 1.9c.5.2 1.4.4 2.4.4 2.3 0 3.8-1.1 3.8-2.8zm5.8 4.2h1.8l-1.6-12h-1.7c-.4 0-.7.2-.8.5l-2.9 11.5h2.2l.4-1.2h2.8l.3 1.2zm-2.4-2.9l1.2-3.2.7 3.2h-1.9zm-8.9-7.2l-2 8.2-.2-1.1c-.4-1.3-1.6-2.7-2.9-3.4l1.8 8.3h2.2l3.3-12h-2.2z" fill="white"/>
                  <path d="M14.5 10h-3.4l-.1.3c2.6.7 4.3 2.3 5 4.2l-.7-3.7c-.1-.4-.5-.7-.9-.8z" fill="#F7B600"/>
                </svg>
                
                {/* Mastercard */}
                <svg className="h-6" viewBox="0 0 48 32" fill="none">
                  <rect width="48" height="32" rx="4" fill="#000"/>
                  <circle cx="18" cy="16" r="8" fill="#EB001B"/>
                  <circle cx="30" cy="16" r="8" fill="#F79E1B"/>
                  <path d="M24 10.4c-1.4 1.2-2.3 3-2.3 5 0 2 .9 3.8 2.3 5 1.4-1.2 2.3-3 2.3-5 0-2-.9-3.8-2.3-5z" fill="#FF5F00"/>
                </svg>
                
                {/* Apple Pay */}
                <svg className="h-6" viewBox="0 0 48 32" fill="none">
                  <rect width="48" height="32" rx="4" fill="#000"/>
                  <path d="M15.5 11.8c-.5.6-1.3 1-2.1 1-.1-.8.3-1.7.8-2.2.5-.6 1.3-1 2-1 .1.8-.2 1.6-.7 2.2zm.7 1.1c-1.1-.1-2 .6-2.5.6-.5 0-1.3-.6-2.2-.6-1.1 0-2.2.7-2.8 1.7-1.2 2-.3 5 .8 6.6.6.8 1.2 1.7 2.1 1.6.9 0 1.2-.6 2.3-.6 1.1 0 1.3.6 2.2.6.9 0 1.5-.8 2.1-1.6.7-.9 1-1.8 1-1.8 0 0-2-.8-2-3 0-1.9 1.5-2.8 1.6-2.8-.9-1.3-2.3-1.4-2.6-1.5zm9.3-.6v10.4h1.6v-3.6h2.2c2 0 3.4-1.4 3.4-3.4 0-2-1.4-3.4-3.3-3.4h-3.9zm1.6 1.4h1.8c1.4 0 2.2.7 2.2 2s-.8 2-2.2 2h-1.8v-4zm8.9 9.1c1 0 1.9-.5 2.3-1.3h0v1.2h1.5v-6.8c0-1.4-1.1-2.3-2.8-2.3-1.6 0-2.7.9-2.8 2.2h1.5c.1-.6.6-1 1.4-1 .9 0 1.3.4 1.3 1.2v.5l-1.7.1c-1.6.1-2.5.8-2.5 1.9 0 1.2.9 1.9 2.2 1.9zm.4-1.2c-.7 0-1.2-.4-1.2-.9 0-.6.4-.9 1.3-1l1.5-.1v.5c0 .9-.7 1.5-1.6 1.5zm4.8 3.4c1.6 0 2.3-.6 3-2.4l2.8-7.8h-1.6l-1.9 6.1h0l-1.9-6.1h-1.7l2.7 7.5-.1.4c-.2.6-.5.8-1.1.8-.1 0-.3 0-.4 0v1.3c.1.1.3.1.6.1z" fill="white"/>
                </svg>
                
                {/* Google Pay */}
                <svg className="h-6" viewBox="0 0 48 32" fill="none">
                  <rect width="48" height="32" rx="4" fill="#fff" stroke="#dadce0"/>
                  <path d="M23.2 16.5v3.8h-1.5v-9.8h4c.9 0 1.8.4 2.4 1 .6.6 1 1.4 1 2.3 0 .9-.4 1.7-1 2.3-.6.6-1.5 1-2.4 1h-2.5v-.6zm0-5.4v4h2.6c.6 0 1.1-.2 1.5-.6.4-.4.6-.9.6-1.4 0-.6-.2-1.1-.6-1.5-.4-.4-.9-.6-1.5-.6h-2.6zm8 9.2c-1 0-1.8-.3-2.5-1-.7-.6-1-1.5-1-2.5v-.2c0-.7.1-1.3.4-1.8.3-.6.7-1 1.2-1.3.5-.3 1-.5 1.6-.5.9 0 1.7.3 2.2 1 .6.6.9 1.5.9 2.6v.6h-4.8c0 .5.2 1 .6 1.3.4.4.8.5 1.3.5.8 0 1.4-.3 1.8-.9l.9.8c-.3.4-.7.8-1.2 1-.5.3-1.1.4-1.8.4zm-.2-6.1c-.4 0-.8.2-1.1.5-.3.3-.5.7-.6 1.2h3.3v-.1c0-.5-.2-.9-.4-1.2-.3-.3-.7-.5-1.2-.5zm5.9-1.4l0 .9c.5-.7 1.2-1 2.1-1 1.4 0 2.1.8 2.1 2.3v4.3h-1.4v-4.3c0-.4-.1-.7-.3-.9-.2-.2-.5-.3-.9-.3-.3 0-.6.1-.9.3-.3.2-.5.4-.6.7v4.5H35v-6.5h1.3z" fill="#3C4043"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Nutrition Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Nutrition is the foundation for longer, healthier lives in dogs.
            </h2>
            <p className="text-gray-600 mb-8">
              Invest in your dog's future with our scientifically formulated superfood-powered supplements. Give them the nutrition they deserve and watch them thrive with vitality, energy, and the joy of a longer, healthier life.
            </p>
            
            <div className="space-y-6 mb-8">
              <h3 className="font-bold text-lg">Key Points:</h3>
              
              <div className="flex items-start gap-4">
                <div className="text-4xl font-bold text-orange-500">97%</div>
                <p className="text-sm text-gray-700 pt-2">
                  Dogs choose our dog food over leading brands because of its real functional ingredients and delicious flavor.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-4xl font-bold text-orange-500">84%</div>
                <p className="text-sm text-gray-700 pt-2">
                  Our dog food provides superior nutrition and a patented probiotic for optimal nutrient absorption.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-4xl font-bold text-orange-500">92%</div>
                <p className="text-sm text-gray-700 pt-2">
                  Our dog food's high protein and fat digestibility contributes to ideal stool quality.
                </p>
              </div>
            </div>
            
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              Give your furry friend the gift of wholesome nutrition
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl h-96 flex items-center justify-center overflow-hidden">
            <img src={happyDogImage} alt="Happy dog with product" className="w-full h-full object-cover" />
            
            
          </div>
        </div>
      </section>

      {/* Gastrointestinal Health Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl h-96 flex items-center justify-center overflow-hidden">
            <img src={dogsEatingImage} alt="Two dogs eating" className="w-full h-full object-cover" />
            
           
          </div>
          
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Improve overall gastrointestinal health for better nutrient absorption
            </h2>
            <p className="text-gray-600">
              Through rigorous scientific studies and consultations with veterinarians, we have created a breakthrough formula specifically tailored to combat the health challenges prevalent in dogs. A staggering 91% of our customers have reported significant improvements in their dogs' health after incorporating our product into their diet.
            </p>
          </div>
        </div>
      </section>

      {/* Prebiotics Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Prebiotics nourish the beneficial gut bacteria, supporting digestive health
            </h2>
            <p className="text-gray-600">
              Our dog food formula contains carefully selected prebiotics that work in harmony with the gut microbiota, providing the necessary nutrients for the growth and maintenance of beneficial bacteria, ultimately supporting digestive health.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-200 to-amber-300 rounded-2xl h-96 flex items-center justify-center">
                        <img src={kibbleImage} alt="Happy dog with product" className="w-full h-full object-cover" />

          </div>
        </div>
      </section>
    </div>
  );
}