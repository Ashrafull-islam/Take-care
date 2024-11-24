'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function PersonInfo() {
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
    medicalHistory: '',
    birthSupportExperience: '',
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
    console.log(formData)
  }

  return (
    <div className="max-h-screen bg-[#F0F4F8] py-12 px-6">
      <div className="mx-auto bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-bold mb-4">Support Person Information</h1>
            <p className=" text-gray-600  max-w-xl mx-auto">
              Please complete this birthing form with your unique experience. Note that all your details will help provide the best birthing experience.
            </p>
            <p className="text-sm font-medium mt-6">(Support Person)</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="input input-bordered w-full p-4 bg-white"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="input input-bordered w-full p-4 bg-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <input
              type="date"
              name="dateOfBirth"
              placeholder="Date of Birth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              className="input input-bordered w-full p-4 bg-white"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              className="input input-bordered w-full p-4 bg-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="input input-bordered w-full p-4 bg-white"
            />
            <input
              type="tel"
              name="contactNumber"
              placeholder="Contact Number"
              value={formData.contactNumber}
              onChange={handleInputChange}
              className="input input-bordered w-full p-4 bg-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <input
              type="text"
              name="emergencyContact"
              placeholder="Emergency Contact Name"
              value={formData.emergencyContact}
              onChange={handleInputChange}
              className="input input-bordered w-full p-4 bg-white"
            />
            <input
              type="tel"
              name="emergencyNumber"
              placeholder="Emergency Contact Number"
              value={formData.emergencyNumber}
              onChange={handleInputChange}
              className="input input-bordered w-full p-4 bg-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <input
              type="text"
              name="allergies"
              placeholder="Allergies"
              value={formData.allergies}
              onChange={handleInputChange}
              className="input input-bordered w-full p-4 bg-white"
            />
            <input
              type="text"
              name="dietaryRequirements"
              placeholder="Dietary Requirements"
              value={formData.dietaryRequirements}
              onChange={handleInputChange}
              className="input input-bordered w-full p-4 bg-white"
            />
          </div>

          <textarea
            name="medicalHistory"
            placeholder="Medical Health History"
            value={formData.medicalHistory}
            onChange={handleInputChange}
            className="textarea textarea-bordered w-full p-4 bg-white"
            rows={4}
          />

          <textarea
            name="birthSupportExperience"
            placeholder="What does being a support person look like to you?"
            value={formData.birthSupportExperience}
            onChange={handleInputChange}
            className="textarea textarea-bordered w-full p-4 bg-white"
            rows={4}
          />

          <textarea
            name="hypnoBirthingInterest"
            placeholder="Are you interested in calm birthing?"
            value={formData.hypnoBirthingInterest}
            onChange={handleInputChange}
            className="textarea textarea-bordered w-full p-4 bg-white"
            rows={4}
          />

          <textarea
            name="additionalInfo"
            placeholder="If no, what works do you enjoy/dislike?"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            className="textarea textarea-bordered w-full p-4 bg-white"
            rows={4}
          />

          <div className="flex justify-between pt-8">
            <button type="button" className="btn btn-outline px-6 py-3">
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back
            </button>
            <button type="submit" className="btn bg-[#2F4F4F] text-white hover:bg-[#2F4F4F]/80 px-6 py-3">
              Next
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
