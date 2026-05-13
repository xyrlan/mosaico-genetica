export default function LastReviewedByline({ date }: { date: string }) {
  const formatted = new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  return (
    <section className="px-4 py-10 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto text-center text-sm text-gray-500">
        <p>
          Última revisão:{' '}
          <time dateTime={date} className="font-medium text-gray-700">
            {formatted}
          </time>
          . Conteúdo escrito e revisado por Dr. Fabrício Maciel Soares, médico
          geneticista (CRM-DF 31124 / RQE 22393).
        </p>
      </div>
    </section>
  )
}
