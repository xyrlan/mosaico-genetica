'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import H2 from './H2'
import ButtonSecondary from './ButtonSecondary'
import Link from 'next/link'

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
        const data = await fetch("/api/reviews", {
          method: "GET",
        }).then((response) => response.json() as Promise<Review[]>)

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
      <div className='mb-14 flex items-center gap-5'>
        <H2>
          Somos uma empresa 5 estrelas
        </H2>
        <FaStar
          size={30}
          className='text-yellow-400'
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1e3a8a]"></div>
        </div>
      ) : (
        /** 
         * Utilizando colunas para criar o efeito "masonry".
         * - columns-1 em telas menores;
         * - columns-2 em tamanho md;
         * - columns-3 em tamanho lg;
         * - gap-6 controla o espaçamento horizontal entre colunas;
         * - space-y-6 controla o espaçamento vertical entre os elementos de cada coluna.
         */
        <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((review, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={index}
              /** 
               * break-inside-avoid previne a quebra do card dentro da coluna.
               * mb-6 cria espaçamento no fim de cada card.
               */
              className="mb-6 break-inside-avoid bg-[#f5eaf0] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
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
      <Link className='mt-5' target='_blank' href={'https://www.google.com/maps/place/Dr.+Fabr%C3%ADcio+Maciel,+M%C3%A9dico+Geneticista+Bras%C3%ADlia/@-15.7351381,-47.8974679,17.25z/data=!4m8!3m7!1s0x935a39b3c89c5d11:0xb1cebe83250b16ac!8m2!3d-15.7933292!4d-47.8930172!9m1!1b1!16s%2Fg%2F11vwwmcrxs?entry=ttu&g_ep=EgoyMDI1MDIwNC4wIKXMDSoASAFQAw%3D%3D'} >
        <ButtonSecondary>Ver todas as avaliações</ButtonSecondary>
      </Link>
      {/* <div className="absolute bottom-0 right-1/2 translate-x-1/2 z-50">
        <AgendarConsulta />
      </div> */}
    </motion.section>
  )
}

export default ReviewSectionGoogle
