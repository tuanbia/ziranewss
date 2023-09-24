export default function PostTitle({ children }) {
  return (
    <h1
      style={{ fontWeight: 'bold' }}
      className="font-weight-bold text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
