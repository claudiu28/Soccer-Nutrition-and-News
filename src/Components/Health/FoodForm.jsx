import {Formik, Form, ErrorMessage, Field} from "formik";
import * as Yup from "yup";
import {Box, Button, Divider, FormLabel, Heading, Input, Stack, Text, Textarea} from "@chakra-ui/react";

const RecipeFormSchema = Yup.object().shape({
    recipeName: Yup.string().required("Recipe name is required"),
    ingredients: Yup.string().required("Ingredients are required"),
});

const FoodForm = () => {
    return (
        <Formik
            initialValues={{
                recipeName: "",
                ingredients: "",
            }}
            validationSchema={RecipeFormSchema}
            onSubmit={(values, actions) => {
                alert("Your recipe sent successfully!");
                actions.setSubmitting(false);
            }}
        >
            {({isSubmitting}) => (
                <Box display="flex" flexDirection="column">
                    <Box border="3px solid black" borderRadius="25px" p={5}>
                        <Form as={Stack} spacing={4}>
                            <Heading textAlign="center" color="green.800">Your recipe</Heading>
                            <Divider borderColor="teal.500" borderWidth="2px" my={4}/>

                            <Box>
                                <FormLabel>Recipe name is:</FormLabel>
                                <Field as={Input} type="text" name="recipeName" placeholder="Recipe name is..."/>
                                <ErrorMessage name="recipeName">
                                    {(msg) => <Text color="red.700" fontSize="sm">{msg}</Text>}
                                </ErrorMessage>
                            </Box>

                            <Box>
                                <FormLabel>Your recipe ingredients:</FormLabel>
                                <Field as={Textarea} name="ingredients" placeholder="Your text ingredients..."/>
                                <ErrorMessage name="ingredients">
                                    {(msg) => <Text color="red.700" fontSize="sm">{msg}</Text>}
                                </ErrorMessage>
                            </Box>

                            <Box display="flex" justifyContent="center" mt={4} mb={3}>
                                <Button type="submit" colorScheme="green" w="100%" isLoading={isSubmitting}>
                                    Submit
                                </Button>
                            </Box>
                        </Form>
                    </Box>
                </Box>
            )}
        </Formik>
    );
};

export default FoodForm;
