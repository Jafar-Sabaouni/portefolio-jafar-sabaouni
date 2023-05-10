
import { HashRouter,Routes, Route, NavLink } from 'react-router-dom';
import react,{useState,useEffect} from "react"
import styles from "./App.module.css";
import Home from "./pages/Home"
import Projects from "./pages/projects"
import Contact from "./pages/Contact"
import ApiPopups from './pages/components/ApiPopups';

const App = () => {
  const [colorTheme, setColorTheme] = useState<string>("#073648");


  useEffect(() => {
    const savedColorTheme = localStorage.getItem("colorTheme");
    if (savedColorTheme) {
      setColorTheme(savedColorTheme);
      
    }
  }, []);
  const changeColorTheme = (color:String)=>{
      setColorTheme(`${color}`); 
      localStorage.setItem("colorTheme",`${color}`)
      
  }

  return (<HashRouter>
    <div className={styles.container} >
      <div className={styles.nav} style={{backgroundColor: colorTheme }}>
        <NavLink className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink} to="home" >Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink} to="projects">projects</NavLink>
        <NavLink className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink} to="contact">contact</NavLink>
        {colorTheme !== "#073648" && <button style={{backgroundColor: "#073648" }} className={styles.themeButton} onClick={()=>{changeColorTheme("#073648");}}>🖌</button>}
        {colorTheme !== "#97000c" &&<button style={{backgroundColor: "#97000c" }} className={styles.themeButton} onClick={()=>{changeColorTheme("#97000c");}}>🖌</button>}
        {colorTheme !== "#202123" &&<button style={{backgroundColor: "#202123" }} className={styles.themeButton} onClick={()=>{changeColorTheme("#202123");}}>🖌</button>}
      </div>
      
      <div className={styles.content}>
        <Routes>
        <Route  path="/" element={<Home colorTheme={colorTheme}/>} />
        <Route  path="/home" element={<Home colorTheme={colorTheme}/>} />
        <Route  path="/projects" element={<Projects colorTheme={colorTheme}/>} />
        <Route  path="/contact" element={<Contact colorTheme={colorTheme}/>} />
        </Routes>


      </div >
      <ApiPopups/>
      <footer style={{backgroundColor: colorTheme }} >© 2022  build by Jafar sabaouni using reactjs typescript.</footer>
    </div></HashRouter>
  );
}

export default App;