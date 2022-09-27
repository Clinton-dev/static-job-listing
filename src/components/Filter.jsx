import React, { useEffect } from 'react';


function Filter({ setLanguage }) {

    return (
        <div className='container w-5/6 mx-auto -mt-4 mb-12 bg-white flex justify-between py-2 px-4 md:mb-0'>
            <div className='flex space-x-4'>
                {/* language */}
                <div className='flex bg-LightGrayCyanFb '>
                    <div className='text-DesDarkCyan p-2'>language</div>
                    <button className='p-2 bg-DesDarkCyan'><img src="src/assets/images/close-icon.svg" alt="close icon" /></button>
                </div>
            </div>
            <div>
                <button className='text-DesDarkCyan capitalize font-bold border-DesDarkCyan hover:border-b' onClick={() => setLanguage("all")}>clear</button>
            </div>
        </div>
    )
}

export default Filter