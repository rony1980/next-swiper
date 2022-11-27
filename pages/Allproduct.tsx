import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
import photo from './../public/tesimonial/face4.webp';
import Image from 'next/image';
const Allproduct = () => {
    const menu = [
    {
        "id":1,
        "name" : "Truck",
        "slug" : "Truck",
        "subcat" :[{
                "id" :2,
                "name" : "Dump Truck",
                "slug" : "dumptruck",
                    },
                    {
                "id" :3,
                "name" : "Pickup",
                "slug" : "pickup",
                    }
                ]        
    },
    {
        "id":5,
        "name": "Bus",
        "slug" : "bus",
        "subcat" :[{
            "id": 6,
            "name": "Mini Bus",
            "slug" : "minibus"
        },
    {
            "id": 7,
            "name": "AC Bus",
            "slug" : "acbuss"
        }]
    },
    {
        "id":8,
        "name": "Tractor",
        "slug" : "tractor",
        "subcat" : null
    }
];
const avatar = {borderRadius: '50%', overflow: 'hidden', width: '100px', height: '100px', background: 'black'}
useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

    return (
        <div className="container">
            <div className="row">
                <div className='position-relative' style={avatar}>
                    <Image src={photo} alt="photo" objectFit="cover"  layout="fill" />
                </div>
            </div>
        <div className='row'>
            <div className="cols-sm-3">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    {menu.map((cat, i)=>{
                        return(
<div key={i} className="accordion-item">
    {cat.subcat ? (
        <>
        <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#flush-collapseOne' + i} aria-expanded="false" aria-controls="flush-collapseOne">
        {cat.name}
      </button>
    </h2>
    <div id={'flush-collapseOne' + i} className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
        <ul className="nav flex-column">
             {cat.subcat.map((sub: any) => (
                 
      <li key={sub.id}><Link href={sub.slug}>{sub.name}</Link></li> 
     ))}
            </ul>
        
      </div>
    </div>
</>
    ) : (
    <button className="accordion-button" type="button" >
        {cat.name}
      </button>
    )}
    
    
  </div>
                        );
                    })}
  
</div>
            </div>
            <div className="col-sm-9 border-start"></div>
        </div>
        </div>
    );
};

export default Allproduct;