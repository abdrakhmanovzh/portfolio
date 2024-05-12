interface Props {
  title: string
  children: React.ReactNode
}

export function Section({ children, title }: Props) {
  return (
    <section className="flex gap-10">
      <h2 className="w-full max-w-28">{title}</h2>
      <div className="w-[0.5px] rounded-md bg-foreground/40"></div>
      {children}
    </section>
  )
}
