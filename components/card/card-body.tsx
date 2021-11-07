import { Box, Text } from "@chakra-ui/layout"

type Props = {
  description1: string;
  description2: string;
}
export const CardBody = ({ description1, description2 }: Props) => {
  return (
    <Box pl="5" pr="5" pb="5" opacity="0.8">
      <Text fontSize="18px">
        {description1}
      </Text>
      <Text fontSize="18px" pt="5">
        {description2}
      </Text>
    </Box>
  )
}
