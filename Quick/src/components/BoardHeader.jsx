import React from 'react';
import Image from './Image';

const BoardHeader = () => {
    return (
        <div className=' w-100 h-12 p-3 border-b bordered-box flex flex-row justify-between border-b-[#0e141929] '>
            <div className="left justify-center items-center flex">
                <h2 className='text-fuchsia-700 text-3xl font-bold font-sans '>Quick Project Management</h2>
                
            </div>
            {/* <div className="right flex items-center space-x-4">
                
                <span>Pavani</span>
                <img className='rounded-full' src="https://placehold.co/28x28/png" alt="" />
            </div> */}
        </div>
    );
}

export default BoardHeader;
