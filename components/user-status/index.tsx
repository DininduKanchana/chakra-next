import {
  Tag,
  TagLabel,
} from "@chakra-ui/react"

type Props = {
  status: string;
}

export const UserStatus = ({ status }: Props) => {
  return (
    <Tag
      size="lg"
      borderRadius="full"
      variant="solid"
      bg="#BE4444"
      mr="3"
    >
      <TagLabel pl="2" pr="2" fontWeight="bold" fontSize="13px" lineHeight="19.5px">{status}</TagLabel>
    </Tag>
  )
};
