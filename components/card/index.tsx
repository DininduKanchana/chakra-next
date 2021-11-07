import { Box } from "@chakra-ui/react"
import { CardBody } from "./card-body";
import { CardFooter } from "./card-footer";
import { CardHeader } from "./card-header";

export const Card = () => {
  return (
    <Box w="640px" color="white" bg="#272B35" borderRadius="xl" m="5">
      <CardHeader status="Funding" userName="Ralph Edwards" imgUrl="/images/avatar.png" />
      <CardBody 
        description1="Velit ut ultrices quis viverra eu, ultricies nulla at nec. Ut diam venenatis egestas massa vulputate nam. Pretium eros, imperdiet odio sit. Natoque quam mi ut leo. Sed ut sit cursus nunc, sit. Magna neque vel amet sem vulputate lacus ut." 
        description2="Diam lacus sed ornare vulputate. Vulputate magna id suspendisse aliquam. Sit fames est proin diam morbi purus non. Purus donec eu arcu euismod. Volutpat facilisi venenatis phasellus maecenas in."
      />
      <CardFooter />
    </Box>
  )
};
