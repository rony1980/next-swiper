import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
function Nav(){

  const [category, setCategory] = useState({})

  useEffect(()=>{
    fetch('http://erpapi.insignia-resorts.com/categories/')
    .then(res=>res.json())
    .then(data=>setCategory(data))
    
  },[])
  
console.log(category);

useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
    return (
        <div className="row">
            <div className="col">
                <div className="dropdown">
  <span className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </span>
  <ul className="dropdown-menu">
    {/* {category.map((cat) => ( 
      <li key={cat['id']}><a className="dropdown-item" href="#">{cat['name']}</a></li>
    ))} */}
  </ul>
</div>
</div>
</div>
    )
}

export default Nav