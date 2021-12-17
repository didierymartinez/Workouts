import Button from '../UI/Button';
import Logo from '../UI/Logo';

const Header = () => {
	return (
		<>
			<Logo></Logo>
			<section>
				Didier
				<Button text='Logout'></Button>
			</section>
		</>
	);
};

export default Header;
