import { Button, Container, Flex, HStack,Text } from '@chakra-ui/react'
import {useColorMode, useColorModeValue,} from "@/components/ui/color-mode"
import { Link } from 'react-router-dom'
import { CiSquarePlus } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";


const Navbar = () => {
  const {colorMode, toggleColorMode} = useColorMode()
  return (
    <Container maxW={"1140px"} px={4} >
      {/* first for light mode other for dark mode dor color mode up  */}
        <Flex 
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base:"column",
                sm:"row"
            }}
        >
          
        <Text
  fontSize={{ base: "22px", sm: "28px" }}
  fontWeight="bold"
  textTransform="uppercase"
  textAlign="center"
  color="blue.500"
>
  <Link to="/">Product Store 🛒</Link>
</Text>


                <HStack  alignItems={"center"}>
                    <Link to={"/create"}>
                       <Button mx={3}>
                         <CiSquarePlus fontSize={20}/>
                       </Button>

                       <Button onClick={toggleColorMode}>
                        {colorMode === "light"?<IoMoon/> : <LuSun size='20'/>}
                       </Button>
                    </Link>
                </HStack>

        </Flex>
    </Container>
  )
}

export default Navbar