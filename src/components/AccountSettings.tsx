import { CheckIcon, ChevronDownIcon, ChevronRightIcon, ChevronUpIcon, CloseIcon } from "@chakra-ui/icons"
import { Container, VStack, Heading, Flex, StackDivider, Icon, Spacer, Button, Text, HStack, Input, ButtonGroup, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react"
import { IoEyeOutline } from "react-icons/io5"
import { useNavigate } from "react-router-dom"

type setting = {
    viewDropdown: boolean,
    change: boolean,
    type: string,
}

const defaultSetting = {
    viewDropdown: false,
    change: false,
}

function AccountSettings() {
    const navigate = useNavigate()
    const [emailSetting, setEmailSetting] = useState<setting>({...defaultSetting, type: "email"})
    const [passwordSetting, setPasswordSetting] = useState<setting>({...defaultSetting, type: "password"})
    const [paymentSetting, setPaymentSetting] = useState<setting>({...defaultSetting, type: "payment"})

    const renderIcon = (setting: setting) => {
        return <Icon as={setting.viewDropdown ? ChevronUpIcon:ChevronDownIcon} boxSize={8} _hover={{cursor: 'pointer'}} onClick={() => {
            if (setting.type == "email") {
                if (emailSetting.change)
                    setEmailSetting({...emailSetting, viewDropdown:!emailSetting.viewDropdown, change:false})
                else
                    setEmailSetting({...emailSetting, viewDropdown:!emailSetting.viewDropdown})
            }
            if (setting.type == "password") {
                if (passwordSetting.change)
                    setPasswordSetting({...passwordSetting, viewDropdown:!passwordSetting.viewDropdown, change:false})
                else
                    setPasswordSetting({...passwordSetting, viewDropdown:!passwordSetting.viewDropdown})
            }
            if (setting.type == "payment") {
                setPaymentSetting({...paymentSetting, viewDropdown: !paymentSetting.viewDropdown})
            }
        }
        }/>
    }

    const handleChangeSetting = (setting: setting) => {
        if (setting.type == "email") {
            setEmailSetting({...emailSetting, change: !emailSetting.change})
        }
        if (setting.type == "password") {
            setPasswordSetting({...passwordSetting, change: !passwordSetting.change})
        }
    }

    return (
        <Container height="90vh" paddingTop='20vh'>
            <VStack width="500px">
                <Heading width="100%">Account Settings</Heading>
                <VStack width="100%" padding={5} divider={<StackDivider borderColor='gray.200' />} spacing={4} align='stretch'>
                    <Flex width="100%" justifyContent='start'>
                        <Heading fontSize={20}>Email</Heading>
                        <Spacer/>
                        {renderIcon(emailSetting)}
                    </Flex>
                    {emailSetting.viewDropdown && 
                        <Flex width="100%">
                            <VStack>
                                <Heading fontSize={12} width="100%">Current Email</Heading>
                                <Text width="100%">email@email.com</Text>
                            </VStack>
                            <Spacer/>
                            {!emailSetting.change && <Button onClick={() => handleChangeSetting(emailSetting)}>Change Email</Button>}
                            {emailSetting.change &&
                                <VStack>
                                    <Input width="100%"placeholder="New Email"/>
                                    <ButtonGroup width="100%">
                                        <Icon as={CheckIcon} backgroundColor='green.500' color="white" boxSize={6} padding={1} borderRadius={5} _hover={{cursor:"pointer", transform: 'scale(1.05)', transition: 'transform 0.15s ease-in'}}/>
                                        <Icon as={CloseIcon} backgroundColor='red.500' color="white" boxSize={6} padding={1} borderRadius={5} _hover={{cursor:"pointer", transform: 'scale(1.05)', transition: 'transform 0.15s ease-in'}} onClick={() => handleChangeSetting(emailSetting)}/>
                                    </ButtonGroup>
                                </VStack>
                            }
                        </Flex>
                    }
                    <Flex width="100%" justifyContent='start'>
                        <Heading fontSize={20}>Password</Heading>
                        <Spacer/>
                        {renderIcon(passwordSetting)}
                    </Flex>
                    {passwordSetting.viewDropdown &&
                        <Flex width="100%">
                        <VStack>
                            <Heading fontSize={12} width="100%">Current Password</Heading>
                            <HStack>
                                <Text width="100%">*********</Text>
                                <Icon as={IoEyeOutline} _hover={{cursor: "pointer"}}/>
                            </HStack>
                        </VStack>
                        <Spacer/>
                        {!passwordSetting.change && <Button onClick={() => handleChangeSetting(passwordSetting)}>Change Password</Button>}
                            {passwordSetting.change &&
                                <VStack>
                                    <InputGroup>
                                    <InputRightElement>
                                        <Icon as={IoEyeOutline} _hover={{cursor: "pointer"}}/>
                                    </InputRightElement>
                                    <Input width="100%"placeholder="New Password" type="password"/>
                                    </InputGroup>
                                    <ButtonGroup width="100%">
                                        <Icon as={CheckIcon} backgroundColor='green.500' color="white" boxSize={6} padding={1} borderRadius={5} _hover={{cursor:"pointer", transform: 'scale(1.05)', transition: 'transform 0.15s ease-in'}}/>
                                        <Icon as={CloseIcon} backgroundColor='red.500' color="white" boxSize={6} padding={1} borderRadius={5} _hover={{cursor:"pointer", transform: 'scale(1.05)', transition: 'transform 0.15s ease-in'}} onClick={() => handleChangeSetting(passwordSetting)}/>
                                    </ButtonGroup>
                                </VStack>
                            }
                    </Flex>                  
                    }
                    <Flex width="100%" justifyContent='start'>
                        <Heading fontSize={20}>Payment Info</Heading>
                        <Spacer/>
                        {renderIcon(paymentSetting)}
                    </Flex>
                    {paymentSetting.viewDropdown &&
                    <Flex width="100%">
                        <VStack>
                            <Heading fontSize={12} width="100%">Current Plan</Heading>
                            <HStack>
                                <Text width="100%">####-####-####-1234</Text>
                            </HStack>
                        </VStack>
                        <Spacer/>
                        <Button onClick={() => navigate('/account/payment')}>Change Payment</Button>
                    </Flex>
                    }
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