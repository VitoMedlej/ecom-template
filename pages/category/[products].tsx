import Head from 'next/head'
import React from 'react'
import TopAd from '../../src/Components/HomeComponents/TopAd/TopAd'
import Navbar from '../../src/Components/Navbar/Navbar'
import FilterSection from '../../src/Components/ProductsComponents/Filter/FilterSection'
import ProductSection from '../../src/Components/ProductsComponents/ProductSection/ProductSection'
import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Typography } from '@mui/material'
import CategoryMenu from '../../src/Components/HomeComponents/CategoryMenu/CategoryMenu'
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
    <TopAd/>
    <Navbar/>
    <CategoryMenu/>
  <Box sx={{margin:'0 auto',pt:'1.5em',maxWidth:'xl',mx:'3vw'}}>

<Box className='flexed' sx={{justifyContent:'space-between'}}>
<Breadcrumb sx={{margin:0,px:0,py:'1em'}}/>

    <Typography className=''>Showing 19 out of 40</Typography>
    </Box> 
    <Divider></Divider>
    <Box  sx={{display:'flex',flexWrap:'wrap'
    ,justifyContent:'space-between'
    ,alignItems:'flex-start'
    ,flexDirection:'row'}}>

    <Accordion sx={{display:{md:'none'},width:'100%'}}>
    <AccordionSummary>
        Open Filter
    </AccordionSummary>
    <AccordionDetails>

    <FilterSection/>
    </AccordionDetails>
    </Accordion>
    <Box sx={{display:{xs:'none',md:'block'},width:'20%'}}>
    <FilterSection sx={{width:'100%'}}/>
    </Box>
    <ProductSection/>
    
  </Box>
    </Box>
  </>
  )
}

export default Index