import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';


function Nav(){

  const [category, setCategory] = useState([] as any[]);

  useEffect(()=>{
    fetch('/navApi.json')
    .then(res=>res.json())
    .then(data=>setCategory(data))
    
  },[])
  
console.log(category);



useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
    return (
        <div className="row">
          {category.map((cat) => ( 
            <div className="col" key={cat.id}> 
            {cat.subcat!=null ? (<div className="dropdown">
  <span className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    {cat.name}
  </span>
  
  <ul className="dropdown-menu" >
     {cat.subcat.map((sub: any) => ( 
      <li key={sub.id}><Link href={sub.slug}>{sub.name}</Link></li> 
     ))}
  </ul>
 
</div>) : (<div className='btn btn-primary'>{cat.name}</div>)}   
                

</div>
))}
</div>
    )
}

export default Nav