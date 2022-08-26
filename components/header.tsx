import Link from 'next/link'
import { MAX_WITH, SITE_NAME } from '../lib/constants'

const Header = () => {
  return (
    <h2 className={`${MAX_WITH} mx-auto text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8`}>
      <Link href="/">
        <a className="hover:underline">{SITE_NAME}</a>
      </Link>
    </h2>
  )
}

export default Header
