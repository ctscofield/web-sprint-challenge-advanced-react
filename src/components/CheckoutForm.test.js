import React from "react";
import { render, screen, waitFor, } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />);
    const fName = screen.getByLabelText(/First Name:/i);
    userEvent.type(fName, "Cory");
    const lName = screen.getByLabelText(/Last Name:/i);
    userEvent.type(lName, "Scofield");
    const address = screen.getByLabelText(/Address:/i);
    userEvent.type(address, "1818 S May St. #3");
    const city = screen.getByLabelText(/City:/i);
    userEvent.type(city, "Chicago");
    const state = screen.getByLabelText(/State:/i);
    userEvent.type(state, "Illinois");
    const zipCode = screen.getByLabelText(/Zip:/i)
    userEvent.type(zipCode, "60608");
    const button = screen.getByRole("button");
    userEvent.click(button);
    waitFor(async () => {
        const successMessage = screen.getByTestId("successMessage");
        console.log(successMessage);
        expect(successMessage).toBeInTheDocument();
        expect(successMessage).toHaveTextContent("Cory");
        expect(successMessage).toHaveTextContent("Scofield");
        expect(successMessage).toHaveTextContent("1818 S May St. #3");
        expect(successMessage).toHaveTextContent("Chicago");
        expect(successMessage).toHaveTextContent("Illinois");
        expect(successMessage).toHaveTextContent("60608");
        expect(successMessage).not.toBeFalsy();
    })
});
