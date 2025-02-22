import React from "react";
import { Switch as ChakraSwitch, FormControl, FormLabel } from "@chakra-ui/react";

interface SwitchProps {
  label: string;
  containerProps?: any;
}

const Switch = ({ label, containerProps }: SwitchProps) => {
  return (
    <FormControl
      display={"flex"}
      flexDir={["row"]}

      gap={"20px"}
      alignItems={"center"}
      {...containerProps}
    >
      <FormLabel whiteSpace={["normal", "normal","nowrap"]} fontWeight={400} fontSize={"sm"}>
        {label}
      </FormLabel>
      <ChakraSwitch colorScheme="blue" />
    </FormControl>
  );
};

export default Switch;
