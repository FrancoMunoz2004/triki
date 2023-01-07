import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Descripcion from "../descripcion/descripcion";
import "./Menu.css";
import Menu2 from "./menu2";

function Menu() {
  return ( 
    <Box display={"flex"} width="100%" height="100%">
      {/* <Box margin="" width={"20%"} height={"100%"} bg="gray">
        <Box
          textAlign={"center"}
          display={"flex"}
          flexDirection="column"
          width={"100%"}
          height={"100% "}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Link to="/Menu" className="btn-horizontal">
            Description
          </Link>
          <Link to="/Reglas" className="btn-horizontal">
            Lista de Reglas
          </Link>
          <Link to="/Registro" className="btn-horizontal">
            Jugar
          </Link>
        </Box>
      </Box> */}
      <Menu2/>
      <Descripcion/>
    </Box>
  );
}

export default Menu;
