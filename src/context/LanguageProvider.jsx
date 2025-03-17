import styles from './LanguageProvider.module.css';
import { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [language, setLanguage] = useState('English'); // Храним текущий язык как строку

    return (
        <MyContext.Provider value={{ language, setLanguage }}>
            {children}
        </MyContext.Provider>
    );
};