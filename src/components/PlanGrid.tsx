import { Text, GridItem, Box, Heading, VStack, SimpleGrid, Card, Stack, StackDivider, CardBody, Flex, Spacer, Center, Button, Link } from "@chakra-ui/react"
import PlanHeader from "./PlanHeader"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const plans = [
    {
        title: "Premium",
        quality: "4K+HDR",
        values: [
            {name: "Price", value: "20.99"},
            {name: "Video Quality", value: "Best"},
            {name: "Resolution", value: "4K (Ultra HD) + HDR"},
            {name: "Spatial Audio", value: "Immersive"},
            {name: "Supported Devices", value: "TV, Computer, Mobile Phone, Tablet"},
            {name: "Devices your household can use at the same time", value: "4"},
            {name: "Download Devices", value: "6"},
            {name: "Ads", value: "No Ads"}
        ]
    },
    {
        title: "Standard",
        quality: "1080p",
        values: [
            {name: "Price", value: "16.99"},
            {name: "Video Quality", value: "Good"},
            {name: "Resolution", value: "1080p"},
            {name: "Spatial Audio", value: "Included"},
            {name: "Supported Devices", value: "TV, Computer, Mobile Phone, Tablet"},
            {name: "Devices your household can use at the same time", value: "2"},
            {name: "Download Devices", value: "2"},
            {name: "Ads", value: "No Ads"}
        ]
    },
    {
        title: "Standard With Ads",
        quality: "720p",
        values: [
            {name: "Price", value: "10.99"},
            {name: "Video Quality", value: "Moderate"},
            {name: "Spatial Audio", value: "Included"},
            {name: "Supported Devices", value: "TV, Computer, Mobile Phone, Tablet"},
            {name: "Devices your household can use at the same time", value: "2"},
            {name: "Download Devices", value: "2"},
            {name: "Ads", value: "Only Some"}
        ]
    }
]

function PlanGrid() {
    const navigate = useNavigate()
    const [currentPlan, setCurrentPlan] =  useState(0)
    const {state: {data}} = useLocation()

    const handlePlanSelect = (index: number) => {
        setCurrentPlan(index)
    }

    const handleSubmit = () => {
        data["selectedPlan"] = plans[currentPlan].title
        navigate("/setup/payment", {state: {data}})
    }

    return (
        <VStack>
            <Text>Step 2 of 3</Text>
            <Heading mb={2}>Choose the plan that’s right for you</Heading>
            <SimpleGrid templateAreas={ `"partialPlans"
                                            "fullPlans"
                                            "nextInformation"`}
                                            width={{lg: "90%", xl: "70%"}}>
                <GridItem area="partialPlans" display={{md: "block", lg:"none"}} mb={4}>
                    <SimpleGrid columns={3} spacingX={1}>
                        {plans.map((plan, index) => 
                            <Card width="150px" onSelect={() => handlePlanSelect(index)} _hover={{cursor: "pointer", transform: 'scale(1.05)', transition: 'transform 0.15s ease-in'}} borderRadius={10} border={index == currentPlan ? "1px solid black":""}>
                                <PlanHeader title={plan.title} quality={plan.quality} partial={true}/>
                            </Card>
                        )}
                    </SimpleGrid>
                    <Stack divider={<StackDivider />} spacing='4' mt={4}>
                        {plans[currentPlan].values.map(planDetail => 
                            <Flex>
                                <Text color='gray.500' fontSize='sm' as='b' display='block'>{planDetail.name}</Text>
                                <Spacer/>
                                <Text as='b' fontSize='md'>{planDetail.value}</Text>
                            </Flex>
                        )}
                    </Stack>
                </GridItem>
                <GridItem area="fullPlans" display={{base: "none", lg:"block"}}>
                    <SimpleGrid columns={3}>
                        {plans.map((plan, index) => 
                            <Card width={{lg: "270px", xl: "350px"}} onClick={() => handlePlanSelect(index)} height="700px" padding={2} _hover={{cursor: "pointer", transform: 'scale(1.05)', transition: 'transform 0.15s ease-in'}} backgroundColor={index == currentPlan ? 'gray.800': ""}>
                                <VStack>
                                    <PlanHeader title={plan.title} quality={plan.quality} partial={false}/>
                                    <CardBody  width='100%'>
                                        <Stack divider={<StackDivider />} spacing='2'>
                                            {plan.values.map(value => 
                                            <Box>
                                                <Text color='gray.500' fontSize='sm' as='b' display='block'>{value.name}</Text>
                                                <Text as='b' fontSize='md' color={index == currentPlan ? 'white' : "black"}>{value.value}</Text>
                                            </Box>
                                            )}
                                        </Stack>
                                    </CardBody>
                                </VStack>
                            </Card>
                        )}
                    </SimpleGrid>
                </GridItem>
                <GridItem area="nextInformation" display='block' mt={5} mb={5}>
                    <Stack spacing={2}>
                        <Text fontSize={14}>
                            <Link color='blue'>Learn more about an ad-supported plan</Link>. If you select an ad-supported plan, 
                            you will be required to provide your date of birth for ads personalization 
                            and other purposes consistent with the Netflix Privacy Statement.
                        </Text>
                        <Text fontSize={14}>
                            Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. 
                            Not all content is available in all resolutions. See <Link color="blue">Terms of Use</Link> for more details.
                        </Text>
                        <Text fontSize={14}>
                        Only people who live with you may use your account. Add 1 extra member with Standard or up to 2 with Premium. 
                        <Link color="blue">Learn more</Link>. Watch on 4 different devices at the same time with Premium and 2 with Standard or Standard with ads.
                        </Text>
                        <Center>
                            <Button backgroundColor='red' color='white' width="350px" height="55px" borderRadius={1} fontSize={28} onClick={handleSubmit}>Next</Button>
                        </Center>
                    </Stack>
                </GridItem>
            </SimpleGrid>   
        </VStack>
    )
}

export default PlanGrid