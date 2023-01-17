import Head from 'next/head'
import React from 'react'
import TopAd from '../../src/Components/HomeComponents/TopAd/TopAd'
import Navbar from '../../src/Components/Navbar/Navbar'
import FilterSection from '../../src/Components/ProductsComponents/Filter/FilterSection'

const Products = () => {
  return (
    <>
    <Head>
      <title>FAT SALE</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

    </Head>
    <TopAd/>
    <Navbar/>
    <main>
    <FilterSection/>
    </main>
  </>
  )
}

export default Products