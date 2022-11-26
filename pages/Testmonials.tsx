import Image from 'next/image';
import React from 'react';
import Face from './../public/tesimonial/face1.webp';

const Testmonials = () => {
    const testi = [
        {"id": "1" , "name": "client 1", "detail" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla a, nobis placeat vel qui ut quod maxime officia doloribus aspernatur sed eaque id debitis harum. Reiciendis odit culpa assumenda voluptatem!", "photo":"face1.webp"},
        {"id": "2" , "name": "client 2", "detail" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla a, nobis placeat vel qui ut quod maxime officia doloribus aspernatur sed eaque id debitis harum. Reiciendis odit culpa assumenda voluptatem!", "photo":"face2.webp"},
        {"id": "3" , "name": "client 3", "detail" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla a, nobis placeat vel qui ut quod maxime officia doloribus aspernatur sed eaque id debitis harum. Reiciendis odit culpa assumenda voluptatem!", "photo":"face3.webp"},
        {"id": "4" , "name": "client 4", "detail" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla a, nobis placeat vel qui ut quod maxime officia doloribus aspernatur sed eaque id debitis harum. Reiciendis odit culpa assumenda voluptatem!", "photo":"face4.webp"},
    ]
    const avatar = {
        "width": "100px",
        "height": "100px",
        "borderRadius": "50%",
        "overflow": "hidden",
        "objectFit":"cover",
        "zIndex": "333"
    }
    return (
        <div className='row'>
            <h1 className='text-center'>TESTIMONIALS</h1>
            <div className="col-sm-6 offset-sm-3"><p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam doloribus incidunt perferendis vero. Consequuntur unde accusamus numquam exercitationem</p></div>
            <div  className="col-sm-4">
                <div className='shadow mb-5 bg-body rounded position-relative overflow-hidden'>
            <h1 className='display-1'><i className="bi bi-quote"></i></h1>
            <p className='text-center px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam doloribus incidunt perferendis vero. Consequuntur unde accusamus numquam exercitationem</p>
            <div className='d-flex justify-content-center'>
                <div style={avatar}>
                <Image width={400} height={250} src={Face} alt="avatar" />
                <h6>Name</h6>
                </div>
            </div>
            <div style={{"position":"absolute", "width": "100%", "bottom":0, "left": 0}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 520">
  <path fill="#f6821f" fill-opacity="1" d="M0,256L48,234.7C96,213,192,171,288,154.7C384,139,480,149,576,176C672,203,768,245,864,234.7C960,224,1056,160,1152,154.7C1248,149,1344,203,1392,229.3L1440,256L1440,520L1392,520C1344,520,1248,520,1152,520C1056,520,960,520,864,520C768,520,672,520,576,520C480,520,384,520,288,520C192,520,96,520,48,520L0,520Z"></path>
</svg>
            </div>
            </div>
            </div>
            
        </div>
    );
};

export default Testmonials;