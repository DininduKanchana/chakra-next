import {
  Avatar,
  Heading,
  Flex,
  Center
} from "@chakra-ui/react"

type Props = {
  userName: string;
  imgUrl: string;
}

export const UserAvatar = ({ userName, imgUrl }: Props) => {
  return (
    <Flex>
      <Avatar name={userName} width="44px" height="44px" src={imgUrl} />
      <Center ml="2">
        <Heading as="h4" fontSize="18px" lineHeight="27px">
          {userName}
        </Heading>
      </Center>
    </Flex>
  )
};
