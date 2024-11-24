// components/MothersInformation.tsx

'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function MotherInfo() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    address: '',
    email: '',
    contactNumber: '',
    emergencyContact: '',
    emergencyNumber: '',
    allergies: '',
    dietaryRequirements: '',
    height: '',
    healthConditions: '',
    medicalHistory: '',
    previousBirths: '',
    vaginalOrCaesarean: '',
    existingConditions: '',
    dependentChildren: '',
    highRiskPregnancy: '',
    birthCenter: '',
    hospitalName: '',
    specialNeeds: '',
    birthTeam: '',
    supportPerson: '',
    birthProgramExpectations: '',
    hypnoBirthingInterest: '',
    additionalInfo: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form Submitted:', formData)
  }

  return (
    <div className="h-[1000px] bg-[#EDF3F6] py-8 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif text-[#2F4F4F] mb-4">Mother's Information</h1>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Please complete the following form with your support person. Please note that all of your details will be kept private and confidential. These individual questions are there to truly serve your experience with us in an exceptional standard. If any details change, please inform your practitioner by sending us an update.
            </p>
            <p className="text-sm font-medium mt-4">(Birthing mother section only)</p>
          </div>

          {/* Grid for Inputs */}
          <div className="grid grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="input input-bordered w-full p-3 rounded-lg"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="input input-bordered w-full p-3 rounded-lg"
            />
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              className="input input-bordered w-full p-3 rounded-lg"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              className="input input-bordered w-full p-3 rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleInputChange}
              className="input input-bordered w-full p-3 rounded-lg"
            />
            <input
              type="tel"
              name="contactNumber"
              placeholder="Contact number"
              value={formData.contactNumber}
              onChange={handleInputChange}
              className="input input-bordered w-full p-3 rounded-lg"
            />
          </div>

          {/* Textarea Fields */}
          {[
            { name: 'medicalHistory', label: 'Blood health history' },
            { name: 'previousBirths', label: 'How many births have you had?' },
            { name: 'vaginalOrCaesarean', label: 'Delivery: Vaginal or C-section? Please specify.' },
            { name: 'existingConditions', label: 'History of eating disorders? Please elaborate.' },
            { name: 'highRiskPregnancy', label: 'Is this a high-risk pregnancy? Reasons why.' },
            { name: 'dependentChildren', label: 'Number of dependent children' },
            { name: 'birthCenter', label: 'Public, private, homebirth, or other?' },
            { name: 'hospitalName', label: 'Name of hospital or birth center' },
            { name: 'specialNeeds', label: 'Any aversion to smells or particular foods?' },
            { name: 'birthTeam', label: 'What does a positive birth look like to you?' },
            { name: 'supportPerson', label: 'What expectations do you have of your support person?' },
            { name: 'birthProgramExpectations', label: 'What are you aiming to learn from the Positive Birth Program?' },
            { name: 'hypnoBirthingInterest', label: 'Are you interested in hypnobirthing?' },
            { name: 'additionalInfo', label: 'If so, what areas do you enjoy/inhale?' }
          ].map(field => (
            <textarea
              key={field.name}
              name={field.name}
              placeholder={field.label}
              // value={formData[field.name]}
              onChange={handleInputChange}
              className="textarea textarea-bordered w-full p-3 rounded-lg"
              rows={3}
            />
          ))}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-8">
            <button
              type="button"
              className="btn btn-outline py-3 px-6 rounded-lg text-[#2F4F4F] border-[#2F4F4F] hover:bg-[#2F4F4F] hover:text-white"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back
            </button>
            <button
              type="submit"
              className="btn bg-[#2F4F4F] text-white hover:bg-[#2F4F4F]/80 py-3 px-6 rounded-lg"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
