import React from 'react';

function Job({ work }) {
    return (
        <div className='w-full border relative rounded-md mb-14 bg-white p-4 drop-shadow-xl'>
            {/* company logo */}
            <div className='absolute -top-8 left-6'>
                <img className="h-16 w-16 rounded-full" src={work.logo} alt="company logo" />
            </div>
            {/* company details */}
            <div className="company-info flex space-x-6 items-end mt-6">
                <p className='text-DesDarkCyan font-bold'>{work.company}</p>
                <div className='flex space-x-2 uppercase'>
                    {work.new &&
                        <div className='font-bold py-0.5 px-2 bg-DesDarkCyan text-white rounded-full'>new!</div>
                    }
                    {work.featured &&
                        <div className='font-bold py-0.5 px-2 bg-VeryDarkGrayCyan text-white rounded-full'>featured</div>
                    }
                </div>
            </div>
            <h6 className='mt-4 font-bold'>{work.position}</h6>
            {/* meta data */}
            <div className="meta-data mb-2 flex space-x-2 text-DarkGrayCyan">
                <p>{work.postedAt}</p>
                <p>{work.contract}</p>
                <p>{work.location}</p>
            </div>
            {/* Job Tags */}
            <div className="tags pt-4 flex space-x-6 border-t text-DesDarkCyan font-bold">
                {work.languages.map((lang) => {
                    return (
                        <div className='bg-LightGrayCyanFb p-1.5 rounded'>
                            {lang}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Job