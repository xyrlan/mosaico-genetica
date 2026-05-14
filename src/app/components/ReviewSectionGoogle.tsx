'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import Image from 'next/image'
import H2 from './H2'
import ButtonSecondary from './ButtonSecondary'
import Link from 'next/link'
import type { Review } from '../utils/getPlacesDetails'

interface ReviewSectionGoogleProps {
  reviews: Review[]
  rating: number | null
  total: number | null
}

function ReviewSectionGoogle({
  reviews,
  rating,
  total,
}: ReviewSectionGoogleProps) {
  const renderStars = (value: number) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={index < value ? 'text-yellow-400' : 'text-gray-300'}
      />
    ))
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ ease: 'easeOut', duration: 1 }}
      id="review"
      className="flex flex-col justify-center items-center px-4 lg:py-24 py-16 pb-32 bg-[#d9edf2] relative overflow-hidden drop-shadow-lg"
    >
      <div className="mb-4 flex items-center gap-5">
        <H2>Somos uma empresa 5 estrelas</H2>
        <FaStar size={30} className="text-yellow-400" />
      </div>

      {rating !== null && total !== null && (
        <p className="mb-12 text-gray-600 font-medium">
          <span className="text-[#1e3a8a] font-semibold">
            {rating.toFixed(1)}
          </span>{' '}
          de 5 — baseado em {total}{' '}
          {total === 1 ? 'avaliação' : 'avaliações'} no Google
        </p>
      )}

      {reviews.length === 0 ? (
        <p className="text-gray-600">
          Avaliações temporariamente indisponíveis.
        </p>
      ) : (
        <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((review, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
                delay: Math.min(index * 0.08, 0.5),
              }}
              key={`${review.author_name}-${index}`}
              className="mb-6 break-inside-avoid bg-[#f5eaf0] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={review.profile_photo_url}
                  alt={review.author_name}
                  width={48}
                  height={48}
                  unoptimized
                  className="w-12 h-12 rounded-full mr-4 object-cover"
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
      <Link
        className="mt-8"
        target="_blank"
        href={'https://www.google.com/maps/place/Dr.+Fabr%C3%ADcio+Maciel,+M%C3%A9dico+Geneticista+Bras%C3%ADlia/@-15.7351381,-47.8974679,17.25z/data=!4m8!3m7!1s0x935a39b3c89c5d11:0xb1cebe83250b16ac!8m2!3d-15.7933292!4d-47.8930172!9m1!1b1!16s%2Fg%2F11vwwmcrxs?entry=ttu&g_ep=EgoyMDI1MDIwNC4wIKXMDSoASAFQAw%3D%3D'}
      >
        <ButtonSecondary>Ver todas as avaliações</ButtonSecondary>
      </Link>
    </motion.section>
  )
}

export default ReviewSectionGoogle
