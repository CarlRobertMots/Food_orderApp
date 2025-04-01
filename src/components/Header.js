import logo from '../assets/logo.jpg'
import Button from './UI/Button'

const Header = () => {
    return (
        <div>
            <header id="main-header">
                <div id="title">
                    <img src={logo}/>
                    <h1>React Food Order App</h1>
                    
                </div>
            <nav>
            <Button textOnly={true}>Cart (0)</Button>
            </nav>
        </header>
        <ul id="meals">
            <h2>Create list of meals, using fetch data from backend</h2>
        </ul>
        </div>
    )
}

export default Header