import React, { createContext, useState } from 'react';


interface TokenContextType {
    token: string;
    setToken: React.Dispatch<React.SetStateAction<string>>;
}

interface TokenContextProviderProps {
    children: React.ReactNode;
}


export const TokenContext = createContext<TokenContextType | null>(null);

const TokenContextProvider: React.FC<TokenContextProviderProps> = (props) => {

    const [token, setToken] = useState<string>('');

    return (
        <TokenContext.Provider value={{ token, setToken }}>
            {props.children}
        </TokenContext.Provider>
    );
};
export default TokenContextProvider;