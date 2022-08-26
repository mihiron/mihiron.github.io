import { ReactNode } from 'react'
import { MAX_WITH } from '../lib/constants'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className={`${MAX_WITH} mx-auto text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left`}>
      {children}
    </h1>
  )
}

export default PostTitle
