import { MAX_WITH, SITE_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className={`${MAX_WITH} mx-auto flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12`}>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
        {SITE_NAME}
      </h1>
    </section>
  )
}

export default Intro
