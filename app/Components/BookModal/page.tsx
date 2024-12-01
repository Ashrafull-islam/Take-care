'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Step = 'calendar' | 'support' | 'mother' | 'payment'

// Mock Components
const MotherInfo = () => (
  <form className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
      <input
        type="text"
        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
        placeholder="Enter mother's full name"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
      <input
        type="email"
        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
        placeholder="Enter email address"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
      <input
        type="tel"
        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
        placeholder="Enter phone number"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
      <input
        type="date"
        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
      />
    </div>
  </form>
)

const PersonInfo = () => (
  <form className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Support Person Name</label>
      <input
        type="text"
        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
        placeholder="Enter support person's name"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Relationship</label>
      <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
        <option value="">Select relationship</option>
        <option value="partner">Partner</option>
        <option value="family">Family Member</option>
        <option value="friend">Friend</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
      <input
        type="tel"
        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
        placeholder="Enter contact number"
      />
    </div>
  </form>
)

const PaymentMeth = () => (
  <form className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
      <input
        type="text"
        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
        placeholder="Enter card number"
      />
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
        <input
          type="text"
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          placeholder="MM/YY"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
        <input
          type="text"
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          placeholder="CVV"
        />
      </div>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
      <input
        type="text"
        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
        placeholder="Enter cardholder name"
      />
    </div>
  </form>
)

export default function BookModal() {
  const [currentStep, setCurrentStep] = useState<Step>('calendar');
  const [currentDate, setCurrentDate] = useState(new Date(2024, 7));
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const availableDates = [8, 14];

  const steps: { id: Step; label: string }[] = [
    { id: 'calendar', label: 'Select a date' },
    { id: 'support', label: 'Support Person Info' },
    { id: 'mother', label: 'Mother Info' },
    { id: 'payment', label: 'Payment' },
  ];

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleStepClick = (step: Step) => {
    setCurrentStep(step);
  };

  const renderCalendar = () => (
    <div className="p-6 text-black">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={handlePrevMonth}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h2 className="text-lg font-medium">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <button
            onClick={handleNextMonth}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {days.map((day) => (
            <div
              key={day}
              className="text-center text-sm font-medium text-gray-600 py-2"
            >
              {day}
            </div>
          ))}

          {Array.from({ length: firstDayOfMonth }).map((_, index) => (
            <div key={`empty-${index}`} className="p-2" />
          ))}

          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1;
            const isAvailable = availableDates.includes(day);
            const isSelected = selectedDate === day;

            return (
              <button
                key={day}
                onClick={() => isAvailable && setSelectedDate(day)}
                disabled={!isAvailable}
                className={`p-2 rounded-lg text-center relative
                  ${isAvailable ? 'hover:bg-teal-50 cursor-pointer' : 'cursor-not-allowed opacity-50'}
                  ${isSelected ? 'bg-teal-100 text-teal-800' : ''}`}
              >
                <span className="text-sm">{day}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="text-center space-y-4 bg-gray-50 p-6 rounded-lg border">
        <p className="text-sm text-gray-600 mx-auto max-w-sm">
          Can't find a suitable day? Please send us an email to book a 1:1 programme.
        </p>
        <button className="px-8 py-3 rounded-xl bg-[#2F4F4F] text-white hover:bg-[#2F4F4F]/80">
          Email
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (currentStep) {
      case 'calendar':
        return renderCalendar();
      case 'support':
        return (
          <div className="p-6 overflow-y-auto max-h-[calc(100vh-200px)]">
            <h2 className="text-xl font-semibold mb-6">Mother's Information</h2>
            <MotherInfo />
          </div>
        );
      case 'mother':
        return (
          <div className="p-6 overflow-y-auto max-h-[calc(100vh-200px)]">
            <h2 className="text-xl font-semibold mb-6">Support Person Information</h2>
            <PersonInfo />
          </div>
        );
      case 'payment':
        return (
          <div className="p-6 overflow-y-auto max-h-[calc(100vh-200px)]">
            <h2 className="text-xl font-semibold mb-6">Payment Details</h2>
            <PaymentMeth />
          </div>
        );
      default:
        return null;
    }
  };

  // Add a condition to hide the modal when isModalOpen is false
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="bg-[#2F4F4F] text-white p-6 md:w-64 relative">
            <div className="space-y-8">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => handleStepClick(step.id)}
                  className={`flex items-center w-full text-left transition-opacity ${
                    currentStep === step.id ? 'opacity-100' : 'opacity-50 hover:opacity-75'
                  }`}
                >
                  <div
                    className={`w-3 h-3 rounded-full mr-3 ${
                      currentStep === step.id ? 'bg-white' : 'bg-gray-400'
                    }`}
                  />
                  <span>{step.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 relative min-h-[500px]">
            {renderContent()}
            <div className="absolute bottom-6 right-6 space-x-4">
              {/* Close Button */}
              <button
                className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>

              {/* Next Button */}
              <button
                className="px-6 py-2 bg-[#2F4F4F] text-white rounded-lg hover:bg-[#2F4F4F]/80 transition-colors"
                onClick={() => {
                  const currentIndex = steps.findIndex(s => s.id === currentStep);
                  if (currentIndex < steps.length - 1) {
                    setCurrentStep(steps[currentIndex + 1].id);
                  }

                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
