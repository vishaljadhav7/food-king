import { useCallback, useEffect, useRef } from "react"

export const useClickOutside = (callback) =>{
      const reference = useRef(null)

      
      const handleClickOutside = (e) =>{
        const isCallbackValid = callback && typeof callback === 'function' 

        if(!isCallbackValid) return;

        if(reference.current &&  !reference.current.contains(e.target)){
            callback();
        }
     }


      useEffect(()=>{
       document.addEventListener('click', handleClickOutside, true)

       return () => {
        document.removeEventListener('click', handleClickOutside, true)
       }
      }, [])

     return reference; 
}