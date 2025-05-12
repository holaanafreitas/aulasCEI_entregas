import logo from '@/assets/img/logo.png'
import NavHeader from './NavHeader';

const Header = () => {
   
   return (
        <>
            <header className="Header">
                <img src={logo} alt="Logo Pixar" className='Logo'/>
              <NavHeader />
            </header>
        </>
   )
}

export default Header;