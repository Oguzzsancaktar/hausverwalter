import dynamic from 'next/dynamic'

const WelcomeView = dynamic(() => import('../views/home/WelcomeView'), { ssr: false })
const FeaturesView = dynamic(() => import('../views/home/FeaturesView'), { ssr: false })

export default function Home() {
  return (
    <main>
      <WelcomeView />
      <FeaturesView />
    </main>
  )
}
