import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'
import Title from './Title'

const RelatedProduct = ({ category, SubCategory }) => {
  const { products } = useContext(ShopContext)
  const [related, setRelated] = useState([])

  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.slice()
      productCopy = productCopy.filter((item) => category === item.category)
      productCopy = productCopy.filter((item) => SubCategory === item.SubCategory)
     
      setRelated(productCopy.slice(0, 5)) // Store the first 5 related products
    }
  }, [products, category, SubCategory]) // Added category and SubCategory to the dependency array

  return (
    <div className='my-24'>
     
     <div className='text-center text-3xl py-2'>
        <Title text1={'RELATED'} text2={'PRODUCTS'}/>

     </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {
        related.map((item,index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}

export default RelatedProduct