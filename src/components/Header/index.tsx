import iconHome from '../../assets/icon_home.jpg';
import './styles.css';

function Header () {
  return (
    <header className="container-header">
      <img
        alt="home"
        className="icon-home"
        src={iconHome}
      />
      <ul className="container-crypto">
        <li>AXS</li>
        <li>RON</li>
        <li>SLP</li>
        <li>USDC</li>
      </ul>
    </header>
  )
}

export default Header;
