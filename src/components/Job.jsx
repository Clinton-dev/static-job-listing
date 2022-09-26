import React from 'react';

function Job({ work }) {
    return (
        <div className='w-full border relative rounded-md mb-14 bg-white p-4 drop-shadow-xl md:p-6 md:mb-6'>
            {/* company logo mobile layout */}
            <div className='absolute -top-8 left-6 md:hidden'>
                <img className="h-16 w-16 rounded-full" src={work.logo} alt="company logo" />
            </div>
            {/* desktop layout */}
            <div className='flex justify-between'>
                {/* left section desktop layout */}
                <div className='flex space-x-2 items-center'>
                    <img className="h-16 w-16 rounded-full hidden md:block" src={work.logo} alt="company logo" />
                    <div >
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
                    </div>
                </div>

                {/* right section desktop layout */}
                <div className="tags pt-4 hidden space-x-6 text-DesDarkCyan font-bold items-baseline md:flex">
                    {work.languages.map((lang) => {
                        return (
                            <div className='bg-LightGrayCyanFb p-1.5 rounded'>
                                {lang}
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* Job Tags mobile layout*/}
            <div className="tags pt-4 flex space-x-6 border-t text-DesDarkCyan font-bold md:hidden">
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