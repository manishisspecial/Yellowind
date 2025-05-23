import React from 'react';

const Insurance = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-display font-bold text-primary-900 mb-8">Insurance Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">Why Choose Our Insurance Services?</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✓</span>
              <span>Comprehensive coverage options</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✓</span>
              <span>Competitive premium rates</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✓</span>
              <span>Quick claim settlement</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✓</span>
              <span>Expert guidance</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✓</span>
              <span>24/7 customer support</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">Insurance Types</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Life Insurance</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Health Insurance</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Motor Insurance</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Home Insurance</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Travel Insurance</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Insurance; 
