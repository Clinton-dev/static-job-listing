import React, { useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Job from './Job';

function Joblisting({ works, filteredWorks, setFilteredWorks, language, setLanguage }) {

    useEffect(() => {
        if (language == "all") {
            setFilteredWorks(works);
            return;
        }

        let filtered = filteredWorks.filter((work) => work.languages.includes(language));
        setFilteredWorks(filtered)

    }, [language])

    return (
        <AnimatePresence>
            <motion.div layout className='container w-5/6 flex flex-wrap mt-10 mx-auto'>
                {filteredWorks.map((work) => {
                    return (
                        <Job work={work} key={work.id} setLanguage={setLanguage} />
                    )
                })}
            </motion.div>
        </AnimatePresence>
    )
}

export default Joblisting