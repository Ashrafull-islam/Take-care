'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Home, RefreshCcw, AlertCircle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl transform transition-all hover:scale-105">
        <div className="text-center">
          <h1 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Oops! Something went wrong
          </h1>
          <div className="mt-8 inline-flex items-center justify-center w-full">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
                <div className="w-32 h-32 border-t-4 border-b-4 border-purple-500 rounded-full"></div>
              </div>
              <AlertCircle className="relative z-10 w-24 h-24 text-purple-500 mx-auto" />
            </div>
          </div>
          <p className="mt-6 text-base text-gray-500">
            Don't worry, it's not you - it's us. We're working on fixing this!
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Error: {error.message || "Unknown error occurred"}
          </p>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => router.push('/')}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            <Home className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
            Go Home
          </button>
          <button
            onClick={() => reset()}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            <RefreshCcw className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
            Try Again
          </button>
        </div>
        <div className="mt-6 text-center">
          <a
            href="#"
            className="text-base font-medium text-purple-600 hover:text-purple-500"
          >
            Report this issue
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}