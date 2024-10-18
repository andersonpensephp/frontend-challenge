import GlobalStyles from '@/styles/globals'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}
