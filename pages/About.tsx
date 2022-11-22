
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Navigation from './components/Nav';
export default function About(){

    const Loader = () => {
  return (
    <div className="container">
      <p className="card-text placeholder-glow mt-5">
          <span className="placeholder col-12 mb-2 rounded" style={{height: "300px"}}></span>
          <span className="placeholder col-6 offset-3 mb-2 rounded" style={{height: "50px"}}></span>
          <span className="placeholder col-4 offset-1 mb-1"></span>
          <span className="placeholder col-4 offset-1 mb-1"></span>
          <span className="placeholder col-4 offset-1 mb-1"></span>
          <span className="placeholder col-4 offset-1 mb-1"></span>
       </p>
    </div>
  );
};
       const [team, setTeam] = useState([] as any[]);

    useEffect(() => {
    fetch(`https://m.mzamin.com/api/api.categoryName.php`)
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);

    const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  
    return (
        <section className='bg1'>

             {loading === false ? (
            <div className="container">
              <Navigation />
                
                 {team.map((team) => ( 
                <div key={team.id} className="row border-bottom mb-5"> 
                    <div className="col-12">
                        <h4 id={team.id}>{team.cname}</h4>
                    </div>
                </div>
                 ))}
            </div>
             ) : (
        <Loader />
      )}
        </section>
    );
}