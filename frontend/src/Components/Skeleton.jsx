import React from "react";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const Skeleton = () => {
  return (
    <Skeleton>
      <div>contents wrapped</div>
      <div>won't be visible</div>
    </Skeleton>
  );
};

export default Skeleton;
