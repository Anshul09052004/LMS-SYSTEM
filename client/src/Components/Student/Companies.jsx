import React from 'react'
import microsoft_logo from '../../assets/microsoft_logo.svg'
import walmart_logo from '../../assets/walmart_logo.svg'
import accenture_logo from '../../assets/accenture_logo.svg'
import adobe_logo from '../../assets/adobe_logo.svg'
import paypal_logo from '../../assets/paypal_logo.svg'

function Companies() {
  return (
    <div className="w-full py-16 px-4 bg-gray-50">

      <p className="text-center text-gray-600 text-lg font-medium mb-10">
        Trusted by top companies
      </p>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
        
        <img className="h-10 mx-auto opacity-70 hover:opacity-100 transition" src={microsoft_logo} alt="Microsoft" />
        <img className="h-10 mx-auto opacity-70 hover:opacity-100 transition" src={walmart_logo} alt="Walmart" />
        <img className="h-10 mx-auto opacity-70 hover:opacity-100 transition" src={accenture_logo} alt="Accenture" />
        <img className="h-10 mx-auto opacity-70 hover:opacity-100 transition" src={adobe_logo} alt="Adobe" />
        <img className="h-10 mx-auto opacity-70 hover:opacity-100 transition" src={paypal_logo} alt="Paypal" />

      </div>

    </div>
  )
}

export default Companies
