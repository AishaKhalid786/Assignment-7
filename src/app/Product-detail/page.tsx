import React from 'react'
import Link from 'next/link'

const Productpage = () => {
  return (
    <div>
      <h1>Product Details</h1>
      <ul>
        <li><Link href="/Product-detail/jacket">Jacket</Link></li>
        <li><Link href="/Product-detail/id"></Link>Product Details</li>

        
      </ul>
    </div>
  )
}

export default Productpage
