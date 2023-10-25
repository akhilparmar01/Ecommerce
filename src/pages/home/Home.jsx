import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import { Link } from 'react-router-dom'


// Layout: Provides the overall page structure.
//  * - HeroSection: Displays the introductory hero section.
//  * - Filter: Allows users to filter and search for products.
//  * - ProductCard: Renders product cards for display.
//  * - Track: Section for order tracking.
//  * - Testimonial: Displays user testimonials.
//  * - Link (from 'react-router-dom'): Provides a link to the 'All Products' page.

function Home() {
  return (
    <Layout>
      <HeroSection />s
      <Filter />
      <ProductCard />
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={'/allproducts'}>
          <button className=' bg-gray-300 px-5 py-2 rounded-xl'>See more</button>
        </Link>
      </div>
      <Track />
      <Testimonial />
    </Layout>
  )
}

export default Home