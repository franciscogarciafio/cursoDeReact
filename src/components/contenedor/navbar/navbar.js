import React, { useState } from "react"
import { Link } from "react-router-dom";



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
import ContactForm from "../contactform/contactform";

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
                <Link to="/"> INICIO 
                </Link>                        
             </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                  <Link to= "/categoria/venta">
                  VENTAS
                  </Link>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>                  
              <Link to="/categoria/alquiler">
                ALQUILERES
                </Link>
              </MenuItemLink>
            </MenuItem>
              <MenuItem>
               <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <Link to={'/cart'}>
                    <CartWidget />
                    </Link>
              </MenuItemLink>
              </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
