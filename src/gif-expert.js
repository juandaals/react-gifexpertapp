import React,{useState} from "react";
import { AddCategory } from "./componentes/AddCategory";
import { GifGrid } from "./componentes/gifGrid";

export const GifExpertApp = () => {
const [categories, setCategories] = useState(['One Punch']);
 
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
   <hr></hr>
  <ol>
   {categories.map( category => (
        <GifGrid
        key={category}
        category={category}/> 
  ))
   }
  </ol>
    </>
  )
}
 