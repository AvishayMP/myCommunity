import { ReactNode, createContext } from 'react';
const BaseUrl = 'https://127.0.0.1:5000';

// Create a context
export const MyContext = createContext(BaseUrl);

export const MyProvider = ({ children }: { children: ReactNode }) => {
    // Provide data or functions to be shared

    return <MyContext.Provider value={BaseUrl}>{children}</MyContext.Provider>;
};
