import { useEffect, useState } from "react"

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try{
            let item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }catch(err) {
            console.log(err);
            return initialValue;
        }
    });

    useEffect(() => {
        try{
            
            const valueToStore = storedValue instanceof Function ? storedValue(storedValue) : storedValue;
            window.localStorage.setItem(key, JSON.stringify(valueToStore));

        }catch(err) {
            console.log(err);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}