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
      <div className="md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <h3 className='mb-3 text-4xl'>
          Profile
        </h3>
        <h4 className='mb-3 text-3xl'>
          Name
        </h4>
        <p className='mb-10'>
          Fumihiro Kinoshita（木下文宏）
        </p>
        <h4 className='mb-3 text-3xl'>
          Links
        </h4>
        <h4 className="mb-3 text-3xl">
          Resume
        </h4>
        <p className='mb-10'>
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </p>
        <h4 className="mb-3 text-3xl">
          Jobs
        </h4>
        <p className='mb-10'>
          Software Engineer, Engineering Manager, General Manager at Edridge inc. 2020/4 -
        </p>
        <h4 className="mb-3 text-3xl">
          Degree
        </h4>
        <p className='mb-10'>
          Bachelor of Environment and Information Studies at&nbsp;
          <a 
            href="https://www.keio.ac.jp/en/"
            rel='noopener noreferrer'
            className='hover:underline'
          >
            Keio University
          </a>
        </p>
      </div>
    </section>
  )
}

export default HeroPost
