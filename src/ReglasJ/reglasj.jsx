import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";import Acordeon from "../Acordeon/acordeon";
import Menu2 from "../menu/menu2";
;

export default function Reglasj() {
  return (
    <Box display={"flex"} width="100%" height="100%">
    <Menu2/>
      <Box className="contenedor">
        {/* CARD CON LAS REGLAS  */}

        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"100%"}
          height={"100%"}
        >
          <Card
            display={"flex"}
            align={"center"}
            justifyContent={"center"}
            bordercolor={"#00913F"}
            border={"3px solid black"}
            width={"50%"}
            height={"auto"}
            p="20px"
          >
            <CardHeader>
              <Heading size="md"> Reglas del Juego</Heading>
              <hr />
            </CardHeader>
            <CardBody>
              <Text>
                Ten en cuenta las Reglas del juego para que te diviertas
              </Text>
            </CardBody>
            <Acordeon />
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
