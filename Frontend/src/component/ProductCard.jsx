"use client";

import {
  Box,
  Heading,
  HStack,
  Image,
  Input,
  Text,
  VStack,
  Button,
  CloseButton,
  Dialog,
  Portal,
} from "@chakra-ui/react";
import { MdEdit, MdDeleteOutline } from "react-icons/md";
import { useColorModeValue } from "@/components/ui/color-mode";
import { useProductStore } from "../store/product";
import { toaster } from "@/components/ui/toaster";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");

  const { deleteProduct, updateProduct } = useProductStore();
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    toaster.create({
      title: success ? "Success" : "Error",
      description: message,
      type: success ? "success" : "error",
      status: success ? "success" : "error",
      isClosable: true,
    });
  };

  const handleUpdateProduct = async (pid, updatedProduct) => {
    const {success,message} = await updateProduct(pid, updatedProduct);
    onClose();
    if(!success) {
      toaster.create({
        title: "Error",
        description: message,
        type: "error",
        status: "error",
        isClosable: true,
      });

    } else{
      toaster.create({
        title: "Success",
        description: "Product updated successfully",
        type: "success",
        status: "success",
        isClosable: true,
      });
    }
  };

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
        src={product.image}
        alt={product.name}
        h={48}
        w="full"
        objectFit="cover"
      />

      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>

        <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
          ${product.price}
        </Text>

        <Dialog.Root lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
          <HStack spacing={2}>
            {/* EDIT ICON (Dialog Trigger) */}
            <Dialog.Trigger asChild>
              <Box
                as="button"
                bg="blue.500"
                p={2}
                borderRadius="md"
                _hover={{ bg: "blue.600" }}
              >
                <MdEdit size={20} color="white" />
              </Box>
            </Dialog.Trigger>

            {/* DELETE ICON */}
            <Box
              as="button"
              bg="red.500"
              p={2}
              borderRadius="md"
              _hover={{ bg: "red.600" }}
              onClick={() => handleDeleteProduct(product._id)}
            >
              <MdDeleteOutline size={20} color="white" />
            </Box>
          </HStack>

          <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Content>
                <Dialog.Header>
                  <Dialog.Title>Update Product</Dialog.Title>
                </Dialog.Header>

                <Dialog.Body>
                  <VStack spacing={4}>
                    <Input
                      placeholder="Product Name"
                      value={updatedProduct.name}
                      onChange={(e) =>
                        setUpdatedProduct({
                          ...updatedProduct,
                          name: e.target.value,
                        })
                      }
                    />
                    <Input
                      placeholder="Price"
                      type="number"
                      value={updatedProduct.price}
                      onChange={(e) =>
                        setUpdatedProduct({
                          ...updatedProduct,
                          price: e.target.value,
                        })
                      }
                    />
                    <Input
                      placeholder="Image URL"
                      value={updatedProduct.image}
                      onChange={(e) =>
                        setUpdatedProduct({
                          ...updatedProduct,
                          image: e.target.value,
                        })
                      }
                    />
                  </VStack>
                </Dialog.Body>

                <Dialog.Footer>
                  <Dialog.ActionTrigger asChild>
                    <Button variant="outline" onClick={onClose}>
                      Cancel
                    </Button>
                  </Dialog.ActionTrigger>
                  <Button
                    colorScheme="blue"
                    onClick={() => handleUpdateProduct(product._id, updatedProduct)}
                  >
                    Update
                  </Button>
                </Dialog.Footer>

                <Dialog.CloseTrigger asChild>
                  <CloseButton size="sm" onClick={onClose} />
                </Dialog.CloseTrigger>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.Root>
      </Box>
    </Box>
  );
};

export default ProductCard;
