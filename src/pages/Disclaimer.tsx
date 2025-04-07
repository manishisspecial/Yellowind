import React from 'react';

const Disclaimer: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Disclaimer</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">General Information</h2>
            <p className="text-gray-600">
              While we strive to provide accurate and up-to-date information, YELLOWIND SERVICES PRIVATE LIMITED does not warrant that the information presented is complete, accurate, or current. All information is subject to change without notice.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">No Financial Advice</h2>
            <p className="text-gray-600">
              The information provided on this website is for general informational purposes only and should not be considered as financial advice. We recommend consulting with qualified financial advisors before making any financial decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Third-Party Services</h2>
            <p className="text-gray-600">
              YELLOWIND SERVICES PRIVATE LIMITED is not responsible for any products, services, or content provided by third-party financial institutions. Any dealings with these institutions are solely between you and the institution.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer; 
