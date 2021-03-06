import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

 const {data:images, loading} = useFetchGifs( category );
  
 

  return (
      <>
      <h3 class="animate__animated animate__bounce" >{category}</h3>
{loading && <p class="animate__animated animate__flash">loading...</p>}
      
    <div className="card-grid">
      
{
    images.map( img => (
        <GifGridItem 
        key={img.id}
        {...img} 
        />
        ))
}

      
    </div>
        </>
  );
};
