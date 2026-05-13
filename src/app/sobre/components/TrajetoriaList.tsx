import { tabs } from "./histories";

export default function TrajetoriaList() {
  return (
    <section
      id="formacao"
      className="px-4 py-16 lg:py-24 bg-white"
      aria-labelledby="formacao-heading"
    >
      <div className="max-w-3xl mx-auto">
        <h2
          id="formacao-heading"
          className="text-2xl lg:text-3xl 3xl:text-4xl font-semibold text-center text-[#1e3a8a] mb-10"
        >
          Formação e trajetória
        </h2>
        <ol className="relative border-l-2 border-[#7fc2d2] pl-6 space-y-10">
          {tabs.map((tab) => (
            <li key={tab.date}>
              <span
                className="absolute -left-[9px] block w-4 h-4 bg-[#7fc2d2] rounded-full"
                aria-hidden
              />
              <p className="text-sm text-gray-500 font-medium">{tab.date}</p>
              <h3 className="text-lg lg:text-xl font-semibold text-[#1e3a8a] mt-1">
                {tab.title}
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">{tab.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
