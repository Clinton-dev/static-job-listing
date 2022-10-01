import React, { useEffect } from 'react';


function Filter({ setFilteredLanguages }) {

    return (
        <div className='container w-5/6 mx-auto -mt-4 mb-12 bg-white rounded-md flex justify-between py-2 px-4 md:mb-0'>
            <div className='flex flex-wrap space-x-4'>
                {/* language */}
                <div className='flex bg-LightGrayCyanFb '>
                    <div className='text-DesDarkCyan p-2'>All</div>
                    <button className='p-2 bg-DesDarkCyan hover:bg-VeryDarkGrayCyan'><img src="src/assets/images/close-icon.svg" alt="close icon" /></button>
                </div>
            </div>
            <div>
                <button className='text-DesDarkCyan capitalize font-bold border-DesDarkCyan hover:border-b' onClick={() => setFilteredLanguages([])}>clear</button>
            </div>
        </div>
    )
}

export default Filter