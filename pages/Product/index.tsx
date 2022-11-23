import Link from 'next/link'
import React from 'react'
export default function index() {
    const product = [
        {"id":1, "name":"Sunglass", "slug": "sunglass"},
        {"id":2, "name":"Smart Watch", "slug": "smartwatch"},
        {"id":3, "name":"iPhone", "slug": "iphone"},
    ]
  return (
    <>
        <h1>This is Product home page</h1>
        {product.map(item=>{
            return(
                <p key={item.id}><Link href={`Product/${item.id}`}>{item.name}</Link></p>
            )
        })}
    </>
  )
}
