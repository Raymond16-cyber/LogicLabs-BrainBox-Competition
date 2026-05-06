type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
}

function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div
      className="mx-auto mb-12 max-w-3xl text-center lg:mx-0 lg:text-left"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <span className="section-kicker">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy">{description}</p>
    </div>
  )
}

export default SectionHeading