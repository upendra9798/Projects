import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
// import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useColorModeValue } from "@/components/ui/color-mode";
import { MdDeleteOutline } from "react-icons/md";

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");
  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
    >
      <Image
        src={
          product.image ||
          "https://unsplash.com/photos/fresh-fruit-juices-are-served-on-a-tray-vjYu-HYEBWQ"
        }
        alt={product.name}
        objectFit="cover"
        w="full"
        h={48}
      />

      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>

        <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
          ${product.price}
        </Text>

        <HStack spacing={2}>
          <IconButton
            icon={<MdEdit />}
            colorScheme="blue"
            aria-label="Edit product"
          />

          <IconButton
            icon={<MdDeleteOutline />}
            colorScheme="red"
            aria-label="Delete product"
          />
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
