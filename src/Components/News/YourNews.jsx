import {Formik, FastField, Form, ErrorMessage} from "formik";
import * as Yup from "yup";
import {Stack, Box, Input, Textarea, FormLabel, Button, Text, Heading} from "@chakra-ui/react";
import {Divider} from "@chakra-ui/react";

const YourNews = () => {
    const validation = Yup.object({
        name: Yup.string()
            .min(5, "Your name must have at least 5 characters!")
            .required("Name is required"),

        email: Yup.string()
            .email("Your email address is not valid!")
            .required("Email is required"),

        subject: Yup.string()
            .min(10, "Your subject should have at least 10 characters")
            .required("Subject is required"),

        information: Yup.string()
            .min(10, "Your information should be more important and detailed")
            .required("Information is required"),
    });

    return (
        <>
            <Formik
                initialValues={{name: "", email: "", subject: "", information: ""}}
                validationSchema={validation}
                onSubmit={(values) => {
                    console.log(values);
                    alert("Your news submitted successfully!");
                }}
            >
                <Box display="flex" flexDirection="column" m={8}>
                    <Box border="3px solid black" borderRadius="25px" p={5} ml={5} mr={5}>
                        <Form as={Stack} spacing={4}>
                            <Heading textAlign="center" color="blue.800">Your news</Heading>
                            <Divider borderColor="teal.500" borderWidth="2px" my={4}/>
                            <Box>
                                <FormLabel>Your name is:</FormLabel>
                                <FastField as={Input} type="text" name="name" placeholder="Your name is..."/>
                                <ErrorMessage name="name">
                                    {(msg) => <Text color="red.700" fontSize="sm">{msg}</Text>}
                                </ErrorMessage>
                            </Box>

                            <Box>
                                <FormLabel>Your email is:</FormLabel>
                                <FastField as={Input} type="email" name="email" placeholder="Your email..."/>
                                <ErrorMessage name="email">
                                    {(msg) => <Text color="red.700" fontSize="sm">{msg}</Text>}
                                </ErrorMessage>
                            </Box>
                            <Box>
                                <FormLabel>Your subject is:</FormLabel>
                                <FastField as={Input} type="text" name="subject" placeholder="Your subject is..."/>
                                <ErrorMessage name="subject">
                                    {(msg) => <Text color="red.700" fontSize="sm">{msg}</Text>}
                                </ErrorMessage>
                            </Box>

                            <Box>
                                <FormLabel>Your text information:</FormLabel>
                                <FastField as={Textarea} name="information" placeholder="Your text information..."/>
                                <ErrorMessage name="information">
                                    {(msg) => <Text color="red.700" fontSize="sm">{msg}</Text>}
                                </ErrorMessage>
                            </Box>

                            <Box display="flex" justifyContent="center" mt={4} mb={3}>
                                <Button type="submit" colorScheme="green" w="100%">Submit</Button>
                            </Box>
                        </Form>
                    </Box></Box>
            </Formik>
        </>
    );
};

export default YourNews;
