import { Outlet, createBrowserRouter, RouterProvider, NavLink } from "react-router-dom";
import react,{useState,useEffect} from "react"
import styles from "./App.module.css";
import Home from "./pages/Home"
import Projects from "./pages/projects"
import Contact from "./pages/Contact"
import ApiPopups from './pages/components/ApiPopups';
interface rootProps{
    colorThemeChange: (value: string) => void;
}
const Root = ({colorThemeChange}:rootProps) => {
    const [colorTheme, setColorTheme] = useState<string>("#073648");
    colorThemeChange(colorTheme)

    useEffect(() => {
      const savedColorTheme = localStorage.getItem("colorTheme");
      if (savedColorTheme) {
        setColorTheme(savedColorTheme);
        
      }
    }, []);
    const changeColorTheme = (color:String)=>{
        setColorTheme(`${color}`); 
        localStorage.setItem("colorTheme",`${color}`)
        colorThemeChange(`${color}`)
    }
  
    return (
      <div className={styles.container} >
        <div className={styles.nav} style={{backgroundColor: colorTheme }}>
          <NavLink className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink} to="home" >Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink} to="projects">projects</NavLink>
          <NavLink className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink} to="contact">contact</NavLink>
          {colorTheme !== "#073648" && <button style={{backgroundColor: "#073648" }} className={styles.themeButton} onClick={()=>{changeColorTheme("#073648");}}>🖌</button>}
          {colorTheme !== "#97000c" &&<button style={{backgroundColor: "#97000c" }} className={styles.themeButton} onClick={()=>{changeColorTheme("#97000c");}}>🖌</button>}
          {colorTheme !== "#202123" &&<button style={{backgroundColor: "#202123" }} className={styles.themeButton} onClick={()=>{changeColorTheme("#202123");}}>🖌</button>}
        </div>
        <ApiPopups/>
        <div className={styles.content}>
          <Outlet />
        </div >
        
        <footer style={{backgroundColor: colorTheme }} >© 2022  build by Jafar sabaouni using reactjs typescript.</footer>
      </div>
    );
  }
  
const App = () => {
    const [colorTheme, setColorTheme] = useState<string>("#073648");
    const ChangeColorTheme = (color: string) => {
        setColorTheme(color);
        console.log(color)
      };

    const router = createBrowserRouter([
        {
          
            path: "portefolio-jafar-sabaouni/",
            element: <Root colorThemeChange={ChangeColorTheme}/>,
            children: [
                {
                    path: "*",
                    element: <Home colorTheme={colorTheme}/>
                },
                {
                    path: "",
                    element: <Home colorTheme={colorTheme}/>
                },
                {
                    path: "home",
                    element: <Home colorTheme={colorTheme} />
                },
                {
                    path: "projects",
                    element: <Projects colorTheme={colorTheme}/>
                },
                {
                    path: "contact",
                    element: <Contact colorTheme={colorTheme} />
                }
            ]
        }
    ]);


    return (

            <RouterProvider router={router} />

    )
}

export default App;