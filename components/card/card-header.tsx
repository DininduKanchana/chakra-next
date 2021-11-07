import { Flex, Spacer } from "@chakra-ui/layout"
import { ThreeDotMenu } from "../three-dot-menu"
import { TimeAgo } from "../time-ago";
import { UserAvatar } from "../user-avatar"
import { UserStatus } from "../user-status"

type Props = {
  status: string;
  userName: string;
  imgUrl: string;
};

export const CardHeader = ({ status, userName, imgUrl }: Props) => {
  return (
    <Flex p="5">
      <UserStatus status={status} />
      <UserAvatar userName={userName} imgUrl={imgUrl} />
      <TimeAgo />
      <Spacer />
      <ThreeDotMenu />
    </Flex>
  )
};
