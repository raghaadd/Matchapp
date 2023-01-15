// get location:
// const findMyloaction=()=>{
//   const status=document.querySelector('.status');

//   const success=(postion)=>{
//       console.log(postion);
//       const latitude=postion.coords.latitude;
//       const longitude=postion.coords.longitude;
//       // this link to get user location:
//       // const geoApiUrl=`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=latitude&longitude=longitude&localityLanguage=en`;
//       const geoApiUrl=`http://localhost:5000/map/users?lng=longitude&lat=latitude`;
//       fetch(geoApiUrl)
//       .then(res => res.json())
//       .then(data =>{
//           console.log(data)
//           status.textContent="City: "+data.principalSubdivision+" Latitude: "+data.latitude+" Longitude: "+data.longitude;

//       })
//       const markup=`
//       <div class="col-lg-3 col-md-6 col-sm-6">
//        <div class="our-team">
//          <div class="pic">
//            <img src="image/person1">
//            </div>
//            <div class="team-content">
//              <h3 class="title">Raghadsalameh</h3>
//              <span class="post">Nablus</span>
//              </div>
//              <ul class="social">
//                 <li>
//                   <a href="profileView.html?username=" class="fa fa-envelope"></a>
//                   </li>
//                   </ul>   
//        </div>
//        </div>
       
//        <div class="col-lg-3 col-md-6 col-sm-6">
//        <div class="our-team">
//          <div class="pic">
//            <img src="image/person2">
//            </div>
//            <div class="team-content">
//              <h3 class="title">randsuwan</h3>
//              <span class="post">Nablus</span>
//              </div>
//              <ul class="social">
//                 <li>
//                   <a href="profileView.html?username=" class="fa fa-envelope"></a>
//                   </li>
//                   </ul>   
//        </div>
//        </div>


//        <div class="col-lg-3 col-md-6 col-sm-6">
//        <div class="our-team">
//          <div class="pic">
//            <img src="image/person4">
//            </div>
//            <div class="team-content">
//              <h3 class="title">tasneemkhalil</h3>
//              <span class="post">Nablus</span>
//              </div>
//              <ul class="social">
//                 <li>
//                   <a href="profileView.html?username=" class="fa fa-envelope"></a>
//                   </li>
//                   </ul>   
//        </div>
//        </div>

//        <div class="col-lg-3 col-md-6 col-sm-6">
//        <div class="our-team">
//          <div class="pic">
//            <img src="image/person1">
//            </div>
//            <div class="team-content">
//              <h3 class="title">deyarIdhilie</h3>
//              <span class="post">Nablus</span>
//              </div>
//              <ul class="social">
//                 <li>
//                   <a href="profileView.html?username=" class="fa fa-envelope"></a>
//                   </li>
//                   </ul>   
//        </div>
//        </div>
       
//        `;
//         document.querySelector('#find_people').insertAdjacentHTML('beforeend',markup);

//     }
//   }






// // get location:
const token=localStorage.getItem(`token`);;
const findMyloaction=()=>{
  const status=document.querySelector('.status');
  const profiles={};

  const success=async (postion)=>{
      console.log(postion);
      const latitude=postion.coords.latitude;
      const longitude=postion.coords.longitude;
      dispalyy();
      // this link to get user location:
      // const geoApiUrl=`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=latitude&longitude=longitude&localityLanguage=en`;
      // const token=localStorage.getItem(`token`);
      alert(token);
      try{
        const geoApiUrl=await postData('http://localhost:5000/map/users?lng='+`${longitude}`+'&lat='+`${latitude}`,{
            lng:longitude,
            lat:latitude,
          });
           profiles=geoApiUrl.profile;
          //  alert( profiles);
          //  displaydata(profiles);

      }
      catch(error){
        console.log(error);
      }
      
      
     

  }
  const error=()=>{
      status.textContent='Unable to retrieve your location';
  }
  navigator.geolocation.getCurrentPosition(success,error);

}
async function postData(url='',data={}){
  const response=await fetch(url,{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`

    },
    body: JSON.stringify(data),
  });
  // alert(response.json());
  return response.json();

}
function dispalyy(){
        const markup=`
      <div class="col-lg-3 col-md-6 col-sm-6">
       <div class="our-team">
         <div class="pic">
           <img src="image/person1.png">
           </div>
           <div class="team-content">
             <h3 class="title">Isra Sabri</h3>
             <span class="post">Nablus</span>
             </div>
             <ul class="social">
                <li>
                  <a href="profileView.html?username=" class="fa fa-envelope"></a>
                  </li>
                  </ul>   
       </div>
       </div>
       
       <div class="col-lg-3 col-md-6 col-sm-6">
       <div class="our-team">
         <div class="pic">
           <img src="image/person2.png">
           </div>
           <div class="team-content">
             <h3 class="title">randsuwan</h3>
             <span class="post">Nablus</span>
             </div>
             <ul class="social">
                <li>
                  <a href="profileView.html?username=" class="fa fa-envelope"></a>
                  </li>
                  </ul>   
       </div>
       </div>


       <div class="col-lg-3 col-md-6 col-sm-6">
       <div class="our-team">
         <div class="pic">
           <img src="image/person4.png">
           </div>
           <div class="team-content">
             <h3 class="title">tasneemkhalil</h3>
             <span class="post">Nablus</span>
             </div>
             <ul class="social">
                <li>
                  <a href="profileView.html?username=" class="fa fa-envelope"></a>
                  </li>
                  </ul>   
       </div>
       </div>

       <div class="col-lg-3 col-md-6 col-sm-6">
       <div class="our-team">
         <div class="pic">
           <img src="image/person1.png">
           </div>
           <div class="team-content">
             <h3 class="title">deyarIdhilie</h3>
             <span class="post">Nablus</span>
             </div>
             <ul class="social">
                <li>
                  <a href="profileView.html?username=" class="fa fa-envelope"></a>
                  </li>
                  </ul>   
       </div>
       </div>
       
       `;
        document.querySelector('#find_people').insertAdjacentHTML('beforeend',markup);

    }

function displaydata(profiles={}){
  alert("hi from display");

profiles?.forEach(user =>{
  const markup=`
  <div class="col-lg-3 col-md-6 col-sm-6">
   <div class="our-team">
     <div class="pic">
     
       <img src="${user.img}">
       </div>
       <div class="team-content">
         <h3 class="title">${user.username}</h3>
         <span class="post"></span>
         </div>
         <ul class="social">
            <li>
              <a href="profileView.html?username=${user.username}" class="fa fa-envelope"></a>
              </li>
              </ul>   
   </div>
   </div>`;
    document.querySelector('#find_people').insertAdjacentHTML('beforeend',markup);
 });}
document.querySelector('.find-state').addEventListener('click',findMyloaction);
