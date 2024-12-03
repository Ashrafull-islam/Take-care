'use client'
import {lora} from '@/app/layout';
import {inter} from '@/app/layout';
import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What is a midwife?",
    answer: "A midwife is a trained health professional who specializes in providing care to women throughout pregnancy, childbirth, and the postpartum period. The role of a midwife is to support and empower women to have safe and positive birthing experiences while providing personalized care that aligns with the individual needs and preferences of each mother.."
  },
  {
    question: "How do I find a midwife that is right for me?",
    answer: "Shipping times vary depending on your location. Typically, domestic orders are delivered within 3-5 business days, while international orders may take 7-14 business days."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to most countries worldwide. International shipping costs and delivery times may vary. Please check our shipping page for more details."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this number to track your package on our website or the carriers site."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. We ensure secure transactions for all payment methods."
  }
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-12 bg-[#E5EEEE] text-[#263B3C]">
      <div className="container mx-auto px-4 ">
        <h2 className={`${lora.className} text-3xl  font-bold text-center mb-8 text-[#263B3C] `}>FAQ</h2>
        <div className="max-w-7xl mx-auto p-4 ">
          {faqs.map((faq, index) => (
            <div key={index} className=" mb-4 border border-black rounded-lg ">
              <button
                className="flex  justify-between border  items-center w-full text-left p-4 bg-[#E5EEEE] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                onClick={() => toggleFaq(index)}
              >
                <span className={`${lora.className} text-lg font-semibold w-full  text-[#263B3C]`}>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-[#263B3C] " />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#263B3C]" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 text-[#263B3C] w-full bg-white rounded-lg shadow-md">
                  <p className={`${inter.className} text-[#263B3C] opacity-80`}>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}