import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import "../App.css";
import { useDispatch } from "react-redux";
import { AddNewAddress, getProfile } from "../Redux/Auth/action";
export const AddressModel = () => {
  const [newAdd, setNewAdd] = useState("");
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const HandleChange = (e) => {
    const { name, value } = e.target;

    setNewAdd({ ...newAdd, [name]: value });
  };
  const HandleAddAddress = () => {
    dispatch(AddNewAddress(newAdd)).then((res) => {
      if (res.payload.status === "success") {
        toast({
          title: res.payload.msg,
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        dispatch(getProfile());
      } else {
        toast({
          title: res.payload.msg,
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      }
    });

    onClose();
  };
  return (
    <>
      <Button
        fontSize={14}
        borderRadius={0}
        colorScheme="blue"
        variant="outline"
        onClick={onOpen}
      >
        Add New Address
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="font-face-pt" fontSize={15}>
            ADD NEW ADDRESS
          </ModalHeader>
          <hr />
          <ModalCloseButton />
          <ModalBody className="font-face-pt">
            <FormLabel fontSize={15}>ADDRESS</FormLabel>

            <Input
              fontSize={15}
              placeholder="Address(House No,Building,Street,Area)*"
              name="details"
              onChange={HandleChange}
            />
            <Input
              name="town"
              onChange={HandleChange}
              mt={3}
              fontSize={15}
              placeholder="Locality/Town*"
            />

            <Input
              name="city"
              onChange={HandleChange}
              mt={3}
              fontSize={15}
              placeholder="City*"
            />
            <Input
              name="state"
              onChange={HandleChange}
              mt={3}
              fontSize={15}
              placeholder="State*"
            />

            <Input
              name="pincode"
              type={"number"}
              onChange={HandleChange}
              mt={3}
              fontSize={15}
              placeholder="Pin Code*"
            />
          </ModalBody>

          <ModalFooter>
            <Button
              className="font-face-pt"
              colorScheme="blue"
              mr={3}
              onClick={HandleAddAddress}
            >
              ADD ADDRESS
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
