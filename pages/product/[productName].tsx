import React from 'react'
import Navbar from '../../src/Components/Navbar/Navbar'
import Head from 'next/head'
import Breadcrumb from '../../src/Components/Breadcrumbs/Breadcrumb'

const Index = () => {
  return (
  <>
     <Head>
      <title>FAT SALE</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
        
    </Head>
    <Navbar/>
    <Breadcrumb />
  </>
  )
}

export default Index