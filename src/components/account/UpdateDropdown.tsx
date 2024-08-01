import { VStack, Flex, Heading, Spacer, Icon, Button, ButtonGroup, Input, Text, InputGroup, InputRightElement } from "@chakra-ui/react"
import { MinusIcon, AddIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons"
import apiClient from '../../utils/services/userService'
import { useState } from "react"
import { useQueryClient } from "@tanstack/react-query"
import { IoEyeOutline } from "react-icons/io5"
import { AxiosError } from "axios"
import {ToastContainer, toast} from 'react-toastify'

type setting = {
    viewDropdown: boolean,
    change: boolean,
    value: string
}

type errorDetail = {
    message: string
}

const defaultSetting = {
    viewDropdown: false,
    change: false,
    value: '',
}

interface Props {
    title: string,
    currentValue: string,
    changeKey: string,
    userId: string,
    type: "text"|"password"
}

interface Payload {
    [key: string]: string;
}

function UpdateDropDown({title, currentValue, changeKey, userId, type}: Props) {
    const queryClient = useQueryClient()
    const [setting, setSetting] = useState<setting>(defaultSetting)
    const [showHidden, setShowHidden] = useState(false)

    const showToast = (message: errorDetail) => {
        console.log("Called " + message.message)
        toast.error(message.message, {
          autoClose: 3000,
          position: "top-center",
          closeButton: false // Set the autoClose duration to 3 seconds
        })
    }

    const handleIconSelect = () => {
        setSetting({...setting, viewDropdown: !setting.viewDropdown, change: false})
    }

    const handleChangeSetting = () => {
        setSetting({...setting, change: !setting.change})
    }

    const submitChange = () => {
        const payload : Payload = {}
        payload[changeKey] = setting.value
        apiClient.put(`/${userId}`, payload)
        .then(() => {
            queryClient.invalidateQueries(['me'])
            setSetting({...setting, change: false})
        })
        .catch((err: AxiosError) => {
            const error_message = err.response?.data
            showToast(error_message as errorDetail)
        })
    }

    const renderInput = () => {
        return type == "text" ? 
        <Input width="100%" placeholder={`New ${title}`} 
               onChange={event => setSetting({...setting, value: event.target.value})}/> :
        <InputGroup>
            <InputRightElement>
                <Icon as={IoEyeOutline} _hover={{cursor: "pointer"}} onClick={() => setShowHidden(!showHidden)}/>
            </InputRightElement>
            <Input width="100%"placeholder="New Password" type={showHidden ? "text":"password"} onChange={event => setSetting({...setting, value: event.target.value})}/>
        </InputGroup>
    }

    return (
        <VStack>
            <ToastContainer autoClose={3000}/>
            <Flex width="100%" justifyContent='start'>
                <Heading fontSize={20}>{title}</Heading>
                <Spacer/>
                <Icon as={setting.viewDropdown ? MinusIcon:AddIcon} 
                      boxSize={4} _hover={{cursor: 'pointer'}} onClick={handleIconSelect}/>
            </Flex>  
            {
            setting.viewDropdown &&
            <Flex width="100%">
                <VStack>
                    <Heading fontSize={12} width="100%">Current {title}</Heading>
                    <Text width="100%">{type == "password" ?"*********":currentValue}</Text>
                </VStack>
                <Spacer/>
                {!setting.change && <Button color="white" backgroundColor="red" onClick={handleChangeSetting}>Change {title}</Button>}
                {setting.change &&
                    <VStack>
                        {renderInput()}
                        <ButtonGroup width="100%">
                            <Icon as={CheckIcon} backgroundColor='green.500' color="white" boxSize={6} 
                                  padding={1} borderRadius={5} _hover={{cursor:"pointer", transform: 'scale(1.05)', 
                                  transition: 'transform 0.15s ease-in'}} onClick={submitChange}/>
                            <Icon as={CloseIcon} backgroundColor='red.500' color="white" boxSize={6} 
                                  padding={1} borderRadius={5} _hover={{cursor:"pointer", transform: 'scale(1.05)', 
                                  transition: 'transform 0.15s ease-in'}} onClick={handleChangeSetting}/>
                        </ButtonGroup>
                    </VStack>
                }
            </Flex>
            }
        </VStack>
    )
}

export default UpdateDropDown
