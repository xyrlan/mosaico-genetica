'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { getPlaceDetails } from '../utils/getPlacesDetails'
import AgendarConsulta from './AgendarConsulta'
import { FaStar } from 'react-icons/fa'

interface Review {
  author_name: string
  author_url: string
  profile_photo_url: string
  rating: number
  relative_time_description: string
  text: string
}

function ReviewSectionGoogle() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getPlaceDetails()
        setReviews(data)
      } catch (error) {
        console.error('Error fetching reviews:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [])

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={index < rating ? 'text-yellow-400' : 'text-gray-300'}
      />
    ))
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeOut', duration: 1 }}
      id="review"
      className="flex flex-col justify-center items-center px-4 lg:py-24 py-16 pb-32 bg-[#d9edf2] relative overflow-hidden drop-shadow-lg"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-[#1e3a8a]">
        O que nossos pacientes dizem
      </h2>

      {loading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1e3a8a]"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              style={{
                height: 'fit-content',
                breakInside: 'avoid'
              }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.profile_photo_url}
                  alt={review.author_name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg text-[#1e3a8a]">
                    {review.author_name}
                  </h3>
                  <div className="flex space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-2">{review.text}</p>
              <p className="text-sm text-gray-500">
                {review.relative_time_description}
              </p>
            </motion.div>
          ))}
        </div>
      )}

      <div className="absolute lg:bottom-28 bottom-36 right-1/2 translate-x-1/2 z-50">
        <AgendarConsulta />
      </div>
    </motion.section>
  )
}

export default ReviewSectionGoogle
