import React from "react";
import CatItem from "./CatItem"
function Favorites({favorites}){

    if(favorites.length === 0 ){
      return (
          <div> 사진 위 하트를 눌러 고양이 사진을 저장 해 봐요  !!
          </div>
      );
    }
    
    //배열을 순회하는 api가 map
    return (
    <ul className="favorites">
      {
          favorites.map(cat => <CatItem img={cat} key={cat}/>)
      }
    </ul>
    );
    }

    export default Favorites;