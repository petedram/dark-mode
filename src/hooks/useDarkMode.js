import { useState } from "react";
import useLocalStorage from './useLocalStorage';



export const useDarkMode = () => {

    const [value, setValue] = useLocalStorage('darkOn')

}