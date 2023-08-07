import { Button, Flex } from "@chakra-ui/react";
import React from "react";

export const Pagination = ({ page, total, setPage }) => {
  const pages = new Array(total).fill(0).map((res, index) => {
    return (
      <Button
        bg={"#14244b"}
        disabled={page == index + 1}
        color={"white"}
        _hover={"none"}
        onClick={() => setPage(index + 1)}
      >
        {index + 1}
      </Button>
    );
  });

  return (
    <>
      <Flex justifyContent={"center"} alignItems={"center"} gap={1}>
        <Button disabled={page == 1} onClick={() => setPage(page - 1)}>
          PREV
        </Button>
        {pages}
        <Button disabled={page == total} onClick={() => setPage(page + 1)}>
          NEXT
        </Button>
      </Flex>
    </>
  );
};
