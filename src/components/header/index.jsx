import { useState } from "react";
import {useSelector,useDispatch} from 'react-redux'; //redux
// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { loginUser, logoutUser } from "../../redux/user/actions"; //redux



function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const {currentUser} =useSelector((rootReducer)=>rootReducer.userReducer);//redux
  console.log(currentUser);//redux
  const dispatch =useDispatch();//redux

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLogin = () => {//redux
    dispatch(loginUser({name: "Yasmim", email: "yasmim.adrieny@gmail.com'" }))
  };

  const handleLogout = () => {//redux
    dispatch(logoutUser())
   
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
       {currentUser ? (<div onClick={handleLogout}>Sair</div>) :(<div onClick={handleLogin}>Login</div>)  //se clicar em logar ele seta as props para os dados que eu passei e se eu clicar em logout ele seta para null
}
        
        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
