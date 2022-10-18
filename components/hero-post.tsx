import DateFormatter from './date-formatter'
import Link from 'next/link'

type Props = {
  title: string
  date: string
  excerpt: string
  slug: string
}

const HeroPost = ({
  title,
  date,
  excerpt,
  slug,
}: Props) => {
  return (
    <section className="max-w-4xl mx-auto">
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </section>
  )
}

export default HeroPost