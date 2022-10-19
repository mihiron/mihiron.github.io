import Link from 'next/link'

type Props = {
  title: string
  slug: string
}

const HeroPost = ({
  title,
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
        </div>
      </div>
    </section>
  )
}

export default HeroPost
