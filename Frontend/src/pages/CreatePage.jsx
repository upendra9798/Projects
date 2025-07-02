import { Box, Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import { useState } from 'react'
import { useColorModeValue,} from "@/components/ui/color-mode"
import { useProductStore } from '../store/product';
import { toaster } from "@/components/ui/toaster"
import { set } from 'mongoose';

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name:"",
    price:"",
    image:""
  });

  // const toast = useToast()
  const {createProduct} = useProductStore()

  const handleAddProduct = async () => {
    // console.log(newProduct);
    const {success,message} = await createProduct(newProduct)
    // console.log("Success:", success);
    // console.log("Message:", message);  
    if(!success){
      toaster.create({ //for succes or failure notification to user
        title:"error",
        description:message,
        type:"error",
        status:"error",
        isClosable:true 
      })
    } else{
      toaster.create({
        title:"success",
        description:message,
        type:"success",
        status:"success",
        isClosable:true
      })
    }
    setNewProduct({ //to reset the form after adding product
      name:"",
      price:"",
      image:""
    })
  }

  return (
   <Container>
    <VStack spacing={8}>
      <Heading as={"h1"} size={"4xl"} textAlign={"center"} mb={8}>
        Create New Product
      </Heading>

      <Box
       w={'50%'} bg={useColorModeValue("white","gray.800")} 
       p={6} rounded={"lg"} shadow={"md"}
      >
        <VStack spacing={4}>
          <Input
           placeholder='Product Name'
           name='name'
           value={newProduct.name}
           onChange={(e) => setNewProduct({...newProduct,name:e.target.value})}
          />
          <Input
           placeholder='Price'
           name='price'
           value={newProduct.price}
           type='number'
           onChange={(e) => setNewProduct({...newProduct,price:e.target.value})}
          />
          <Input
           placeholder='Image URL'
           name='image'
           value={newProduct.image}
           onChange={(e) => setNewProduct({...newProduct,image:e.target.value})}
          />

          <Button colorScheme='blue' onClick={handleAddProduct} w='full'>
            Add Product
          </Button>
        </VStack>
      </Box>
    </VStack>
   </Container>
  )
}

export default CreatePage