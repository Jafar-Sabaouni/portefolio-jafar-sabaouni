import { Outlet, createBrowserRouter, RouterProvider, NavLink } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./pages/Home"
import Projects from "./pages/projects"
import Contact from "./pages/Contact"
const Root = () => {
return (
<div className={styles.container}>
<div className={styles.nav}>
<NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="/" >Home</NavLink>
<NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="projects">projects</NavLink>
<NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="contact">contact</NavLink>
</div>
<div className={styles.content}>
<Outlet/>
</div >
<footer >© 2022  build by Jafar sabaouni using reactjs typescript.</footer>
</div>
);
}

const App = () => {
const router = createBrowserRouter([
{
path: "/",
element: <Root/>,
children: [
{
path: "",
element: <Home/>
},
{
path: "projects",
element: <Projects/>
},
{
path: "contact",
element: <Contact/>
}
]
}
]);


return (
    <div >
        <RouterProvider router={router} />
    </div>
)
}

export default App;