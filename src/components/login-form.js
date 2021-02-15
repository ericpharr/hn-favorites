import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormLabel, ErrorSpan, Button, FormContainer, Input, FormTitle } from "./ui/login";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export function LoginForm(props) {
  return (
    <FormContainer>
      <FormTitle>Log In</FormTitle>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={props.onSubmit}
      >
        {({ errors, touched }) => (
          <Form className="px-8 w-80">
            <FormLabel htmlFor="firstName">
              First Name
              <ErrorMessage component={ErrorSpan} name="firstName" />
            </FormLabel>
            <Field as={Input} name="firstName" placeholder="Your First Name" />
            <FormLabel htmlFor="lastName">
              Last Name
              <ErrorMessage component={ErrorSpan} name="lastName" />
            </FormLabel>
            <Field as={Input} name="lastName" placeholder="Your Last Name" />
            <FormLabel htmlFor="email">
              Email
              <ErrorMessage component={ErrorSpan} name="email" />
            </FormLabel>
            <Field as={Input} name="email" type="email" placeholder="YourEmail@email.com" />
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
}
