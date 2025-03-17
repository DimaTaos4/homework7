import styles from './LanguageConteiner.module.css';
import { useContext } from 'react';
import { MyContext } from '../../context/LanguageProvider';
import SwitchLanguage from '../SwitchLanguage/SwitchLanguage';
import languageData from '../data/languageData';

export default function LanguageConteiner() {
    const { language } = useContext(MyContext); // Получаем текущий язык из контекста

    // Найдем текст для текущего языка
    const currentLanguageText = languageData.find((elem) => elem.language === language);
console.log(currentLanguageText);

    return (
        <div className={styles.mainConteiner}>
            <h2>{currentLanguageText.text}</h2> {/* Отображаем текст в зависимости от выбранного языка */}
            <SwitchLanguage /> {/* Отображаем только один select */}
        </div>
    );
}