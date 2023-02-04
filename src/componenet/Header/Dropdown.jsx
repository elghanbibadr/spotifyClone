import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Dropdown = () => {
    const [dropDownExpanded, setDropDownExpanded] = useState(false)
    const [selectedItem, setSelectedItem] = useState('serif')
    const handleDropDownSelected = () => {
        setDropDownExpanded(prv => !prv)
    }
    const handleFontSelected = (e) => {
        setSelectedItem(e.target.textContent)
    }


    useEffect(() => {
        if (selectedItem.includes('sans')) {
            document.body.style.fontFamily = 'sans-serif'
        } else {
            document.body.style.fontFamily = `${selectedItem}`
        }
    }, [selectedItem])

    const spring = {
        type: "spring",
        damping: 10,
        stiffness: 100,
      }
      
    return (

        <AnimatePresence>
            <div onClick={handleDropDownSelected} className="custom-select cursor-pointer relative text-white dark:text-textLight ">
                <div className="flex items-center">
                    <p className="mr-4">{selectedItem}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8"><path fill="none" stroke="#A445ED" stroke-width="1.5" d="m1 1 6 6 6-6" /></svg>
                </div>
                {dropDownExpanded && <motion.ul
                transition={spring}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 1 }}
                    onClick={handleFontSelected}
                    className={` absolute right-2 text-base  w-32 p-2 bg-primary border-0 dark:bg-white lg:w-40`} >
                    <li className='p-1  ' >sans serif</li>
                    <li className='p-1 ' >Serif</li>
                    <li className='p-1 '   >monospace</li>
                </motion.ul>}
            </div>
        </AnimatePresence>
    )
}


export default Dropdown;