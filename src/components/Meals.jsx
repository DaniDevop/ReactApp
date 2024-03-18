import React, { useState ,useEffect} from 'react'

export default function Meals() {
  const [loadedMeals,setLoadMeals]=useState([]);

  useEffect( ()=>{
    async function fecthMeals() {
      const response = await fetch('http://localhost:3000/meals');
      
      if(!response.ok){
  
      }
      const data = await response.json();
      setLoadMeals(data);
    }
    fecthMeals()
  },[])
  
  return (
    <div><ul>
    {loadedMeals.map(meal => (
        <li key={meal.id}>{meal.name}</li>
    ))}
</ul></div>
  )
}



