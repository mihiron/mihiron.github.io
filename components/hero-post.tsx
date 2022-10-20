import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
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
        <h3 className='mb-6 text-4xl'>
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
        <ul className="flex mb-10">
          <li className="mr-3">
            <a
              href="https://github.com/mihiron"
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon
                icon={faGithub}
                className='w-6 h-6'
              />
            </a>
          </li>
          <li className="mr-3">
            <a
              href="https://www.linkedin.com/in/fkinoshita/"
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className='w-6 h-6'
              />
            </a>
          </li>
          <li className="mr-3">
            <a
              href="https://www.facebook.com/fumihiro.kinoshita"
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className='w-6 h-6'
              />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/mihiro___"
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className='w-6 h-6'
              />
            </a>
          </li>
        </ul>
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
            target='_blank'
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
