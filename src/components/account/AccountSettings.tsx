import { ChevronRightIcon } from "@chakra-ui/icons"
import { Container, VStack, Heading, Flex, StackDivider, Icon, Spacer, Button } from "@chakra-ui/react"
import { useNavigate, useOutletContext } from "react-router-dom"
import UpdateDropDown from "./UpdateDropdown"
import { User } from "../../entities/User"

function AccountSettings() {
    const user = useOutletContext<User>()
    const navigate = useNavigate()

    return (
        <Container height="90vh" paddingTop='20vh'>
            <VStack width="500px">
                <Heading width="100%">Account Settings</Heading>
                <VStack width="100%" padding={5} divider={<StackDivider borderColor='gray.200' />} spacing={4} align='stretch'>
                    <UpdateDropDown title="Email" currentValue={user ? user.email : ""} key="email" userId={user ? user.id : ""} type="text"/>
                    <UpdateDropDown title="Password" currentValue={user ? user.password : ""} key="password" userId={user ? user.id : ""} type="password"/>
                    <Flex width="100%" justifyContent='start'>
                        <Heading fontSize={20}>Payment Info</Heading>
                        <Spacer/>
                        <Button onClick={() => navigate('/account/payment', {state: user})}>Change Payment</Button>
                    </Flex>
                    <Flex width="100%" justifyContent='start' _hover={{cursor: 'pointer'}} onClick={() => navigate('/account/plans')}>
                        <Heading fontSize={20}>View Plans</Heading>
                        <Spacer/>
                        <Icon as={ChevronRightIcon} boxSize={8}/>
                    </Flex>
                    <Flex width="100%" justifyContent='start'>
                        <Heading fontSize={20}>Delete Account</Heading>
                        <Spacer/>
                        <Icon as={ChevronRightIcon} boxSize={8}/>
                    </Flex>
                </VStack>
            </VStack>
        </Container>
    )
}

export default AccountSettings