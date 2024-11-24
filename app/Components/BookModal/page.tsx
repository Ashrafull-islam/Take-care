'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import MotherInfo from '../MotherInfo'
import PersonInfo from '../PersonInfo'
import PaymentMeth from '../PaymentMeth'

type Step = 'calendar' | 'support' | 'mother' | 'payment'

export default function BookModal() {
  const [currentStep, setCurrentStep] = useState<Step>('calendar')
  const [currentDate, setCurrentDate] = useState(new Date(2024, 7)) // August 2024
  const [selectedDate, setSelectedDate] = useState<number | null>(null)

  // Available dates for booking
  const availableDates = [8, 14]

  const steps: { id: Step; label: string }[] = [
    { id: 'calendar', label: 'Select a date' },
    { id: 'support', label: 'Support Person Info' },
    { id: 'mother', label: 'Mother Info' },
    { id: 'payment', label: 'Payment' },
  ]

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate()

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay()

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const handleStepClick = (step: Step) => {
    setCurrentStep(step)
  }

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
            const day = index + 1
            const isAvailable = availableDates.includes(day)
            const isSelected = selectedDate === day

            return (
              <button
                key={day}
                onClick={() => isAvailable && setSelectedDate(day)}
                disabled={!isAvailable}
                className={`
                  p-2 rounded-lg text-center relative
                  ${isAvailable ? 'hover:bg-teal-50 cursor-pointer' : 'cursor-not-allowed opacity-50'}
                  ${isSelected ? 'bg-teal-100 text-teal-800' : ''}
                `}
              >
                <span className="text-sm">{day}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="text-center space-y-4 bg-gray-50 p-6 rounded-lg border ">
        <p className="text-sm text-gray-600 md:w-[300px]">
          Can't find a suitable day? Please send us an email to book a 1:1 programme.
        </p>
        <button className=" px-8 py-3 rounded-xl bg-[#2F4F4F] text-white hover:bg-[#2F4F4F]/80">
          Email
        </button>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (currentStep) {
      case 'calendar':
        return renderCalendar()
      case 'support':
        return (
          <div className="p-6 max-h-screen">
            <h2 className="text-xl font-semibold mb-6">Mother's Information</h2>
            {/* Add support person form fields here */}
            <MotherInfo></MotherInfo>
          </div>
        )
      case 'mother':
        return (
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-6">Support Person Information</h2>
            {/* Add mother's information form fields here */}
            <PersonInfo></PersonInfo>
          </div>
        )
      case 'payment':
        return (
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-6">Payment Details</h2>
            {/* Add payment form fields here */}
            <PaymentMeth></PaymentMeth>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className=" bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-[200px,1fr]">
            {/* Sidebar */}
            <div className="bg-[#2F4F4F] text-white p-6 relative">
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
              {/* Decorative illustration */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="w-full h-32 bg-white/10 rounded-lg" />
              </div>
            </div>

            {/* Main Content */}
            <div className="relative -my-10">
              {renderContent()}

              <div className="absolute bottom-6 right-6">
                <button
                  className="btn bg-[#2F4F4F] text-white hover:bg-[#2F4F4F]/80"
                  onClick={() => {
                    const currentIndex = steps.findIndex(s => s.id === currentStep)
                    if (currentIndex < steps.length - 1) {
                      setCurrentStep(steps[currentIndex + 1].id)
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
    </div>
  )
}