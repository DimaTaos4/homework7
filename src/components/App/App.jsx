import './App.css';
import LanguageConteiner from '../LanguageConteiner/LanguageConteiner';
import { MyProvider } from '../../context/LanguageProvider';
import '../../styles/reset.css'
function App() {
  return (
    <>
      <MyProvider>
        <LanguageConteiner />
      </MyProvider>
    </>
  );
}

export default App;