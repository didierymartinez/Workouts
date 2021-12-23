import Button from '../Button';
import Logo from '../Logo';

import './Header.css';

const Header = () => {
	return (
		<header>
			<Logo></Logo>
			<section className='loginInfo-container'>
				Didier
				<Button text='Logout'></Button>
			</section>
		</header>
	);
};

export default Header;
