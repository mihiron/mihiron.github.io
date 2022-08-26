import markdownStyles from './markdown-styles.module.css'
import { MAX_WITH } from '../lib/constants'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className={`${MAX_WITH} mx-auto`}>
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default PostBody
