import Container from './container'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="max-w-4xl mx-auto py-8 items-center">
          <h3 className="text-xl tracking-tighter leading-tight text-center text-gray-500 mb-2">
            COPYRIGHT © 2022 mihiro ALL RIGHTS RESERVED.
          </h3>
          <div className="text-l tracking-tighter leading-tight text-center text-gray-500">
            The source code of this site is on&nbsp;
            <a 
              href='https://github.com/mihiron'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline text-blue-600 hover:text-blue-800'
            >
              GitHub
            </a>
            .
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
