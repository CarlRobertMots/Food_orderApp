import logo from '../assets/logo.jpg'


const Header = () => {
    return (
        <div>
            <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <button>Cart (0)</button>
            </nav>
        </header>
        <ul id="meals">
            <h2>Create list of meals, using fetch data from backend</h2>
        </ul>
        </div>
    )
}

export default Header