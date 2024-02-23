import { Link } from 'react-router-dom'
import './header.css';


function Header () {
    return(
        <div className='header'>
            <p className='logo'>BestBrowserGames</p>
            <div className='container'>
                <a href='https://github.com/EricAG9'> GITHUB</a>
            </div>
            <div>
                <Link to='/login' style={{ textDecoration: 'none', color: 'yellow', fontSize: '20px'}}>Sair</Link>
            </div>
        </div>
    )
}

export default Header;