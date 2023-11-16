import React from 'react'
import Nav from './components/Nav'
import { Hero, PopularProduct, SuperQulity, Services, SpacialOffer, CustomarReviews, Subscribe, Footer } from './sections'

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-1 wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <PopularProduct />
      </section>
      <section className='padding bg-red-200'>
        <SuperQulity />
      </section>
      <section className='padding'>
        <Services />
      </section>
      <section className='padding'>
        <SpacialOffer />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full bg-blue-200'>
        <CustomarReviews />
      </section>
      <section className='padding'>
        <Subscribe />
      </section>
      <section className='padding-x padding-t pb-8 bg-black text-white'>
        <Footer />
      </section>
    </main>
  )
}

export default App