import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifCollectionItem } from "./GifCollectionItem";


export const GifCollection = ({ category }) => {
  const {data, loading} = useFetchGifs(category);



  return (
    <>
      <h3 className='animate__animated animate__flash'>{category}</h3>
      {loading && <p className='animate__animated animate__flash'>Cargando...</p>}
      <div className="card-collection">
        {data.map((img) => (
          <GifCollectionItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
