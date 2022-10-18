import Container from './container'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="max-w-4xl mx-auto py-10 items-center">
          <h3 className="text-2xl tracking-tighter leading-tight text-center text-gray-500 mb-5">
            COPYRIGHT © 2022 mihiron ALL RIGHTS RESERVED.
          </h3>
          <div className="text-xl tracking-tighter leading-tight text-center text-gray-500">
            The source code of this site is on&nbsp;
            <a 
              href='https://github.com/mihiron'
              rel='noopener noreferrer'
              className='hover:underline'
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
