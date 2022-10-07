import React, { useState } from "react"
import {Link} from 'react-router-dom';
import People from "../../rutes/Propiedades";

import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "./navbar.elements";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

import CartWidget from "../cartWidget/cartWidget";


import { IconContext } from "react-icons";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoContainer>    
            <p> F.G. SERVICIOS INMOBILIARIOS</p>                      
          </LogoContainer>
          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <Menu open={showMobileMenu}>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <Link className="linkBoton" to={'/'}> INICIO 
                </Link>                        
             </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                  <Link className="botonNavBar" to={'/people'}>
                  VENTAS
                  </Link>
                 
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>                  
                  ALQUILERES
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                  CONTACTANOS
              </MenuItemLink>
              </MenuItem>
              <MenuItem>
               <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    <CartWidget />
              </MenuItemLink>
              </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
