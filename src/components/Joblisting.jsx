import React, { useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Job from './Job';

function Joblisting({ works, filteredLanguages, filteredWorks, setFilteredWorks, language, setLanguage, setFilteredLanguages }) {

    useEffect(() => {
        if (!filteredLanguages.length > 0) {
            setFilteredWorks(works);
            return;
        }

        // loop through language filter array
        // filter out the array if language is found work.languages.includes(lang)
        let filtered = filteredWorks.filter((work) => work.languages.includes(filteredLanguages[0]));
        setFilteredWorks(filtered)

    }, [filteredLanguages])

    return (
        <AnimatePresence>
            <motion.div layout className='container w-5/6 flex flex-wrap mt-10 mx-auto'>
                {filteredWorks.map((work) => {
                    return (
                        <Job work={work} key={work.id} setLanguage={setLanguage} setFilteredLanguages={setFilteredLanguages} />
                    )
                })}
            </motion.div>
        </AnimatePresence>
    )
}

export default Joblisting