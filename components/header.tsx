import Link from 'next/link'
import { SITE_NAME } from '../lib/constants'


const Header = () => {
  return (
    <h2 className="max-w-4xl mx-auto text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-10 mt-8">
      <Link href="/">
        <a className="hover:underline">{SITE_NAME}</a>
      </Link>
    </h2>
  )
}

export default Header
