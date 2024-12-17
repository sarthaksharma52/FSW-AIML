import React, { createContext } from 'react';  
import Child1 from './ComponentContext/Child1context';  
import Child2 from './ComponentContext/Child2context';

const StudentContext = createContext();  

export default function AppContext() {  
    const studentData = {  
        name: "Sarthak Sharma",  
        branch: "AIML",  
        section: "C",  
        college: "ABES EC"  
    };  

    return (  
        <div>  
            
            <StudentContext.Provider value={studentData}>  
                <Child1 /> 
                <Child2 /> 
            </StudentContext.Provider>  
        </div>  
    );  
}  

export { StudentContext };