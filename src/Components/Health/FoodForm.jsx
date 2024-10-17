import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Input, Textarea } from "@chakra-ui/react";

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
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {() => (
                <Form>
                    <div>
                        <label htmlFor="recipeName">Recipe Name</label>
                        <Field
                            name="recipeName"
                            as={Input}
                            type="text"
                            placeholder="Enter recipe name"
                        />
                        <ErrorMessage name="recipeName" component="div" style={{ color: "red" }} />
                    </div>

                    <div>
                        <label htmlFor="ingredients">Ingredients</label>
                        <Field
                            name="ingredients"
                            as={Textarea}
                            placeholder="List ingredients here"
                        />
                        <ErrorMessage name="ingredients" component="div" style={{ color: "red" }} />
                    </div>

                    <Button type="submit" colorScheme="blue" mt={4}>
                        Submit Recipe
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default FoodForm;
