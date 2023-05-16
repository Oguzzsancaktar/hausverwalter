import { ContactView, WizzardView } from '@/views'
import dynamic from 'next/dynamic'

const WelcomeView = dynamic(() => import('../views/home/WelcomeView'), { ssr: false })
const FeaturesView = dynamic(() => import('../views/home/FeaturesView'), { ssr: false })
const ServicesView = dynamic(() => import('../views/home/ServicesView'), { ssr: false })

export default function Home() {
  return (
    <main>
      <WelcomeView />
      <FeaturesView />
      <ServicesView />
      <WizzardView />
      <ContactView />
    </main>
  )
}
