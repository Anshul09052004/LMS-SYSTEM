import { createContext, use } from "react";
import { useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useEffect } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [allCourses, setAllCourses] = useState([]);
    const fetchAllCourses = () => {
        setAllCourses(dummyCourses);
    }
    useEffect(() => {
        fetchAllCourses();
    }, []);
    const value = {
        allCourses,
        fetchAllCourses

    };

    return <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>;
};

export default AppContextProvider;