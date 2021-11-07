import { Input, InputGroup, InputRightElement } from "@chakra-ui/input"
import { Box, Text } from "@chakra-ui/layout"
import { ShareIcon } from "../icons/share-icon"

export const CardFooter = () => {
  return (
    <Box p="5" bg="rgba(95, 116, 149, 0.102)">
      <Text fontWeight="semibold" fontSize="16px" lineHeight="24px">
        How can you help with this Request?
      </Text>
      <InputGroup bg="rgba(95, 116, 149, 0.2)" borderRadius="full" mt="2">
        <Input placeholder="Type here..."  border="none" borderRadius="full"/>
        <InputRightElement>
          <ShareIcon />
        </InputRightElement>
      </InputGroup>
    </Box>
  )
}
