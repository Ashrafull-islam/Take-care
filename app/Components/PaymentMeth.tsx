'use client'

import { X, CreditCard } from 'lucide-react'

export default function PaymentMeth() {
  return (
    <div className="max-w-xl mx-auto">
      {/* Cancellation Policy Section */}
      <div className="bg-[#2F4F4F] text-white rounded-2xl p-8 text-center mb-4">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
              <X className="w-8 h-8" />
            </div>
            <div className="absolute -right-2 -bottom-2">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                <X className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-xl font-medium mb-2">Cancellation Policy</h2>
        <p className="text-sm text-gray-200 mb-6">
          For cancellations, please notify us 48 hours in advance. Late cancellations may incur a fee.
        </p>
        <button className="btn btn-outline border-white text-white hover:bg-white hover:text-[#2F4F4F] w-48">
          Cancel request
        </button>
      </div>

      {/* Booking Information Section */}
      <div className="bg-gray-50 rounded-2xl p-8">
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Booking information</h3>
          <div className="flex items-center justify-between">
            <span>Online Group Relaxation Sessions</span>
            <span className="font-medium">${'610'}</span>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-medium">Choose your payment method</h3>
          
          {/* Payment Methods */}
          <div className="space-y-3">
            {/* Visa Card */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-6 bg-[#1A1F71] rounded flex items-center justify-center text-white text-xs font-bold">
                    VISA
                  </div>
                  <span className="text-sm text-gray-600">xxxx xxxx xxxx 8908</span>
                </div>
                <input type="radio" name="payment" className="radio radio-sm" defaultChecked />
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>Expires: 09/28</span>
                <span>Default</span>
              </div>
            </div>

            {/* PayPal */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-6 bg-[#003087] rounded flex items-center justify-center text-white text-xs font-bold">
                    PP
                  </div>
                  <span className="text-sm text-gray-600">xxxx xxxx xxxx 8908</span>
                </div>
                <input type="radio" name="payment" className="radio radio-sm" />
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>Expires: 09/28</span>
                <span>Default</span>
              </div>
            </div>

            {/* Mastercard */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-6 bg-[#EB001B] rounded flex items-center justify-center text-white text-xs font-bold">
                    MC
                  </div>
                  <span className="text-sm text-gray-600">xxxx xxxx xxxx 8908</span>
                </div>
                <input type="radio" name="payment" className="radio radio-sm" />
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>Expires: 09/28</span>
                <span>Default</span>
              </div>
            </div>

            {/* Add Payment Method */}
            <button className="w-full bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-between hover:bg-gray-50">
              <div className="flex items-center space-x-3">
                <CreditCard className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-600">Add payment method</span>
              </div>
            </button>
          </div>

          {/* Submit Button */}
          <button className="btn bg-[#2F4F4F] hover:bg-[#2F4F4F]/90 text-white w-full">
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}