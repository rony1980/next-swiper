
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
       const [team, setTeam] = useState([]);

    useEffect(() => {
    fetch(`https://m.mzamin.com/api/api.teamdata.php`)
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
                <div className="row">
                <h1 className='mt-5 fw-bold' style={{color:"#e2024e"}}>বিশ্বকাপের ৩২ দলের পরিচিতি</h1>
                <div className="row mb-5 align-items-center">
                    <div className="col-sm-2 col-3">
                       
                        <div className="d-sm-none d-block mt-3">
                             <h3>আতিকুল ইসলাম</h3>
                        স্পোর্টস রিপোর্টার, মানবজমিন
                        </div>
                    </div>
                    <div className="col-1 d-sm-block d-none">
                        <h3>আতিকুল ইসলাম</h3>
                        স্পোর্টস রিপোর্টার, মানবজমিন
                    </div>
                    <div className="col-9 border-start"><p className='fs-4'>১৯৩০ সালে উরুগুয়েতে বিশ্বকাপের প্রথম আসর বসে। ২০১৮ সালে রাশিয়ায় সবশেষ বিশ্বকাপ খেলা হয়েছে। দীর্ঘ ৮৮ বছরে ‘গ্রেটেস্ট শো অন আর্থে’র ২১টি আসর আয়োজিত হয়েছে। ২২তম ফিফা ওয়ার্ল্ডকাপের আয়োজক কাতার। চলুন দেখে নেয়া যাক কাতারে অংশ নেয়া ৩২ দলের বিশ্বকাপের সেরা সাফল্য।</p></div>
                </div>
                </div>
                 {team.slice(0, 80).map((team) => ( 
                <div key={team['id']} className="row border-bottom mb-5"> 
                    <div className="col-12">
                        <h4 className='text-warning' id={team['country']}>গ্রুপ- {team['group']}</h4>
                        <h2 className='text-info'>{team['country']}</h2>    
                        <div
  style={{
    width: 150,
    height: 75,
    position: "relative",
  }}>          
                        <Image layout="fill"
  objectFit="contain"
       className='img-fluid rounded mb-3' src={`https://mzamin.com/uploads/worldcup/${team['photo']}`} alt={team['country']} />   
       </div>            
                        <p className='mt-2 fs-4 px-5'>{team['detail']}</p>
                        <h2 className='text-success'>কোচ</h2>
                        <div className="row">
                        <div className="col-sm-2">
                        <Image width={100} height={100} className='img-fluid mb-2' src={`https://mzamin.com/uploads/worldcup/${team['cphoto']}`} alt={team['coatch']} />
                        <p className='fs-5'>{team['coatch']}</p>
                        </div>
                        <div className="col-sm-10">
                            {team['cdetail']}
                        </div>
                        </div>
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