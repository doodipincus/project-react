import React, { createContext, useState, useEffect } from 'react';


interface FlagsContextType {
    homeFlag: boolean;
    setHomeFlag: React.Dispatch<React.SetStateAction<boolean>>;
    allTripsFlag: boolean;
    setAllTripsFlag: React.Dispatch<React.SetStateAction<boolean>>;
    loginFlag:boolean
    setLoginFlag:React.Dispatch<React.SetStateAction<boolean>>;
    registrationFlag:boolean
    setRegistrationFlag:React.Dispatch<React.SetStateAction<boolean>>;
}

interface FlagsContextProviderProps {
    children: React.ReactNode;
}


export const FlagsContext = createContext<FlagsContextType | null>(null);

const FlagsContextProvider: React.FC<FlagsContextProviderProps> = (props) => {

    const [homeFlag, setHomeFlag] = useState<boolean>(true);
    const [allTripsFlag, setAllTripsFlag] = useState<boolean>(false);
    const [loginFlag, setLoginFlag] = useState<boolean>(false)
    const [registrationFlag, setRegistrationFlag] = useState<boolean>(false)


    return (
        <FlagsContext.Provider value={{ homeFlag, setHomeFlag, allTripsFlag, setAllTripsFlag, loginFlag, setLoginFlag, registrationFlag, setRegistrationFlag}}>
            {props.children}
        </FlagsContext.Provider>
    );
};
export default FlagsContextProvider;