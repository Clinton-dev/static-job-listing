import React, { useEffect } from 'react';
import Job from './Job';

function Joblisting({ works, setFilteredWorks, language, setLanguage }) {

    useEffect(() => {
        if (language == "all") {
            setFilteredWorks(works);
            return;
        }

        let filtered = works.filter((work) => work.languages.includes(language));
        setFilteredWorks(filtered)

    }, [language])

    return (
        <div className='container w-5/6 flex flex-wrap mt-10 mx-auto'>
            {works.map((work) => {
                return (
                    <Job work={work} key={work.id} setLanguage={setLanguage} />
                )
            })}
        </div>
    )
}

export default Joblisting