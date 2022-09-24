import React from 'react';
import Job from './Job';

function Joblisting({ works }) {
    return (
        <div className='container w-5/6 flex flex-wrap mt-10 mx-auto'>
            {works.map((work) => {
                return (
                    <Job work={work} key={work.id} />
                )
            })}
        </div>
    )
}

export default Joblisting