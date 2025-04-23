 import React from 'react'
 
 const StarWars = () => {
    const [starWarsData, setStarWarsData] = React.useState(null)
     
    React.useEffect(()=> { 
        console.log('effect');
        fetch('https://swapi.tech/api/people')
        .then(res=> res.json())
        .then(data => setStarWarsData(data))
    })
    console.log("resrd");
   return (
     <div>
       <pre>{JSON.stringify({setStarWarsData}, null, 2)}</pre>
     </div>
   )
 }
 
 export default StarWars
 