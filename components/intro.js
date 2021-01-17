export default function Intro({ title, describe = '' }) {
  return (
    <section className="flex-col md:flex-col flex items-center md:justify-between my-8 md:my-16">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
        {title}
      </h1>
      <h4 className="text-left md:text-center text-base md:text-lg whitespace-pre-wrap mt-5">
        {describe && describe}
      </h4>
    </section>
  )
}
