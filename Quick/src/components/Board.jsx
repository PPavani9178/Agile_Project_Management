import { useState } from 'react';
import React from 'react';


import BoardHeader from './BoardHeader';

import { BoardContext } from '../context/BoardContext';
import BoardSideBar from './BoardSideBar';
import BoardMain from './BoardMain';



function Board() {
  const boardData = {
    active:0,
    boards:[
      {
        name:'your Board',
        bgcolor:'#069',
        list:[
          {id:"1",title:"To do",items:[{id:"cdrFt",title:"Project Description 1"}]},
          {id:"2",title:"In Progress",items:[{id:"cdrFv",title:"Project Description 2"}]},
          {id:"3",title:"Done",items:[{id:"cdrFb",title:"Project Description 3"}]}
        ]
      }
    ]
  }
  const [allboard,setAllBoard] = useState(boardData); 
  
  return (
    <>
    <BoardHeader/>
    <BoardContext.Provider value={{allboard,setAllBoard}}>
      <div className='content flex'>
        {/* <Sidebar></Sidebar> */}
        <BoardSideBar/>
        
        <BoardMain/>
      </div>
    </BoardContext.Provider>
    </>
  );
    
  
}

export default Board;
