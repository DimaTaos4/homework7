import styles from './SwitchLanguage.module.css';
import { useContext } from 'react';
import { MyContext } from '../../context/LanguageProvider';

export default function SwitchLanguage() {
    const { language, setLanguage } = useContext(MyContext); // Получаем язык из контекста

    const handleChange = (e) => {
        setLanguage(e.target.value); // Обновляем выбранный язык в контексте
    };

    return (
        <select value={language} onChange={handleChange}>
            <option value="English">English</option>
            <option value="Русский">Русский</option>
            <option value="Українська">Українська</option>
            <option value="Deutsch">Deutsch</option>
        </select>
    );
}