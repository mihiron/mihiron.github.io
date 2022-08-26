import Container from './container'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="max-w-4xl mx-auto py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4">
            Statically Generated with Next.js.
          </h3>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
