import { Footer } from '../footer'
import { Navbar } from '../navbar'

type Props = {
  children: React.ReactNode
}
export const MainLayout = (props: Props) => {
  // ** Props
  const { children } = props

  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
