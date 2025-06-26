import {Box} from "@chakra-ui/react"
import {Route,Routes} from "react-router-dom"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import Navbar from "./component/Navbar"
import { useColorModeValue,} from "@/components/ui/color-mode"
import { Toaster, toaster } from "@/components/ui/toaster"


function App() {

  return (
    <>
    
   <Box minH={"100vh"}  bg={useColorModeValue("gray.100","gray.900")}> 
    {/* 100vh-To cover full page */}
    <Navbar /> 
  {/* Navbar will be visible no matter which route is open(outside of Routes) */}
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/create" element={<CreatePage/>}></Route>
    </Routes>

     <Toaster />
   </Box>
    </>
  )
}

export default App
