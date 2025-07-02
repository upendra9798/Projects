import { Container,SimpleGrid,Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product'
import { useEffect } from 'react';
import ProductCard from '../component/ProductCard';

const HomePage = () => {
  const {fetchProducts, products} = useProductStore();

  useEffect(() => {
    fetchProducts(); // Fetch products when the component mounts
  },[fetchProducts])
  console.log("products", products);
  
  return (
    <Container maxW={'container.xl'} py={12}>
      <VStack spacing={4}>
      <Text 
        fontSize="2xl"
        fontWeight="bold"
        bgGradient="linear(to-r, cyan.400, blue.500)"
        bgClip="text"
        textAlign="center"
      >
        Current Products 🚀
      </Text>

      <SimpleGrid
        columns={{ //column on screen at a time //columns not column
          base: 1,
          md: 2,
          lg: 3,
        }}
        spacing={10}
        w='full'
      >
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </SimpleGrid>

     {products.length === 0 && (
        <Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
        No products found 😢 {" "}
        <Link to={"/create"}>
           <Text as='span' color='blue.500' _hover={{textDecoration: "underline"}}>
            Create a product
           </Text>
        </Link>
      </Text>
     )}
      </VStack>
    </Container>
  )
}
export default HomePage