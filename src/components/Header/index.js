import './style.css';
import InfoUser from './InfoUser';
import InfoGitsUser from './InfoGitsUser';

const Header = ({value}) => {
  
  return (
    <div className="header">
      <img className="avatar" src={value.avatar_url} alt='imagem usuario' />
      <div className="header-info">
        <InfoUser value={value} />
        <InfoGitsUser value={value}/>
      </div>
    </div>
  );
}

export default Header;
