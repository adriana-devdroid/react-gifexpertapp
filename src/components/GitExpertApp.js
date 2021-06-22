import React,{useState} from "react";
import { AddCategory } from "./AddCategory";
import { GifCollection } from "./GifCollection";

export const GitExpertApp = () => {
  const [categories, setCategories] = useState([
    "himym"
  ]);

/*   const handleAdd = () => {
    setCategories([...categories,'sirenita'])
  }; */
  return (
    <>
      <h2>GitExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr />

    
      <ol>
        {categories.map((item) => 
          <GifCollection key={item} category={item}/>
        )
        }
      </ol>
    </>
  );
};
