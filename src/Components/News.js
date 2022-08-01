import React, { useState, useEffect } from 'react';
import '../Styles/main.css';
import Im1 from '../Images/chid.PNG';
import ReadMore from './ReadMore';

export default function News() {
   const [newsData, setNewsData] = useState();
   const [latestArticle, setLatestArticle] = useState();
   const [exploreArticle, setExploreArticle] = useState();
   const [trandingArticle, setTrandingArticle] = useState();
   

   
 

  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'hidoc Dr. news' })
  };
  fetch('http://devapi.hidoc.co:8080/hidoc-us/api/v1/getArticlesByUid?sId=5&uuId=0', requestOptions)
      .then(response => response.json())
      .then(res => {
        let { data } = res;
        let { news, latestArticle, exploreArticle, trandingArticle} = data;
         
        console.log("data",news, res );
        setNewsData(news); setLatestArticle(latestArticle); setExploreArticle(exploreArticle); setTrandingArticle(trandingArticle);
      }
      );
  },[]);
console.log(newsData);
  return (
  <>
    <div className='container-fluid bg'>
      <div className="row text-center">
        <h5><b>News</b></h5>
      </div>
      <div className="row px-4">
       
         {newsData?.map((res, i) => 
        <>      
        <div key={i} className="col-lg-2 p-1">
        
           <img src={res.urlToImage} alt="ABC" height={'100%'} width={'100%'} /> 
        </div>
        <div key={i} className="col-lg-10 px-1">
        
             <h6><b>{res.title}</b></h6> 
             
            <p>{res.description}</p>
            
        </div>
      
            </>
        )  }  
         
        </div>
    <div className='border-bottom my-4'></div>
    
      <div className="row ">
        <div className="col-4 card text-center overflow-auto" style={{height:'400px'}}>
          <h6 className='border-bottom py-2'><b>Latest News</b></h6>
          {latestArticle?.map((res, i) =>(
            <div className='border-bottom py-2'>
            {res.articleTitle}
            </div>)
            )}
          
        </div>
        <div className="col-4 card text-center overflow-auto" style={{height:'400px'}}>
        <h6 className='border-bottom py-2'><b>Trending News</b></h6>
          { trandingArticle?.map( (res, i) =>(
         <div key={i} className='border-bottom div'  >
          <img src={res.articleImg} alt="abc" width={'100%'} height={'60%'}/>
          <div>{res.articleTitle}</div>
         </div>
          ))}
        </div>
          
        <div className="col-4 card text-center overflow-auto" style={{height:'400px'}}>
        <h6 className='border-bottom py-2'><b>Explore more in news</b></h6>
        {exploreArticle?.map( (res, i) => (
          <div key={i} className='border-bottom py-2'>
            <h6><b>{res.articleTitle}</b></h6>
            <p>{res.articleDescription}</p>
          </div>
        ))}
        <button type="button" className="btn btn-info">Explore hidoc Dr.</button>
        </div>
      </div>
      </div>
      <div className="container-fluid p-3">
        <div className="row text-center">
          <h5><b>whats more on hidoc Dr.</b></h5>
        </div>
        <div className="row">
          <div className="col-4 bg">
            <h5><b>News</b></h5>
            <p>TMEM16F mediated phosphatidylserine exposure and microparticle release on erythrocyte contribute to hypercoagulable state in hyperuricemia TMEM16F mediated phosphatidylserine</p>
          </div>
          <div className="col-4">
            <img src={Im1} alt="xyz" />
          </div>
          <div className="col-4 border ">
            <div className="row border-bottom p-3"><span><b>Quizzes</b>: play and win hidoc points</span></div>
            <div className="row border-bottom p-3"><span><b>Surveyes</b>: participate in serveys to win extra points</span></div>
            <div className="row p-3"><span><b>Medical Calculator</b>: Tagline related calculator</span></div>
          </div>
          </div>
          <div className="row bg-info py-2 ">
            <div className='col-11'>
            <b className='align-middle'>Social Network for doctors - A special feature for hidoc Dr. </b>
            </div>
            <div className="col-1" ><button type="button" className="btn btn-primary button2 px-3" ><b>visit</b></button></div>
          </div>
        
      </div>
  </>
  );
}