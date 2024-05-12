interface Props {
  title: string
  children: React.ReactNode
}

export function Section({ children, title }: Props) {
  return (
    <section className="flex flex-col gap-4 md:flex-row md:gap-10">
      <h2 className="w-full max-w-28">{title}</h2>
      <div className="h-[0.5px] w-full rounded-md bg-foreground/40 md:h-full md:w-[0.5px]"></div>
      {children}
    </section>
  )
}
