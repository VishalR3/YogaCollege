import Head from 'next/head'
import Header from '../components/marginals/header'
import About from '../components/homepage/about'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yoga College</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <About/>
    </div>
  )
}
