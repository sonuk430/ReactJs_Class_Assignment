import './App.css'
import { DropDown } from './Components/DropDown'
import { supportedLanguages } from './Components/data'
import axios from "axios";

function App() {
  const [sourceLang, setSourceLang] = useState("");
  const [tragetLang, setTragetLang] = useState("");

  const requiredData = {
    source_language: sourceLang,
    target_language: tragetLang,

  }

  console.log(requiredData);


  return (
    <>
      <DropDown supportedLanguages={supportedLanguages} label="Source Language" onChange={(e) => setSourceLang(e.target.value)} />
      <DropDown supportedLanguages={supportedLanguages} label="Target Language" onChange={(e) => setTragetLang(e.target.value)} />


    </>
  )
}

export default App
