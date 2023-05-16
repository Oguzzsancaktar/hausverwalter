import dynamic from 'next/dynamic'

const WelcomeView = dynamic(() => import('../views/home/WelcomeView'), { ssr: false })

export default function Home() {
  return (
    <main>
      <WelcomeView />
    </main>
  )
}
