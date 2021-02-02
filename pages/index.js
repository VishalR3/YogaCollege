import Head from 'next/head'
import Header from '../components/marginals/header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yoga College</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
    </div>
  )
}
