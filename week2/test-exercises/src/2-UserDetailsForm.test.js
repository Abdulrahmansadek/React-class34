import { render, screen, fireEvent } from "@testing-library/react";

import UserDetailsForm from "./2-UserDetailsForm";

/**
 * UserDetailsForm is a component that has some user interaction so is a little more complex.
 *
 * A nice way of thinking about what to test is to look at the steps the user can take when they interact with this component. So:
 * - Read the current information (check that this is correct based on the prop)
 * - Change a field (check that the changes are applied in the UI)
 * - Click on the Submit button (check that the fields are sent to the function)
 */

const testUser = {
  firstName: "John",
  lastName: "Doe",
  role: "Admin",
};
const changedUser = {
  firstName: "Mary",
  lastName: "Williams",
  role: "User",
};
// create mock function
const MockedUser = jest.fn();

describe("UserDetailsForm", () => {
  it("Correctly fills in the initial values", () => {
    render(<UserDetailsForm initialUserValues={testUser} />);
    const intialFirstNameUser = screen.getByLabelText("First name:");
    const intialLasNameUser = screen.getByLabelText("Last name:");
    const intialRole = screen.getByLabelText("Role:");

    expect(intialFirstNameUser.value).toBe(testUser.firstName);
    expect(intialLasNameUser.value).toBe(testUser.lastName);
    expect(intialRole.value).toBe(testUser.role);
  });

  it("Correctly changes a fields value", () => {
    render(<UserDetailsForm initialUserValues={testUser} />);
    fireEvent.change(screen.getByLabelText("First name:"), {
      target: { value: changedUser.firstName },
    });
    expect(screen.getByLabelText("First name:").value).toBe(
      changedUser.firstName
    );
    // in this test i skipped the last name and the role because they are exuctly same way as the first name
  });

  it("Submits the right values to the onSubmit function", async () => {
    render(
      <UserDetailsForm initialUserValues={testUser} onSubmit={MockedUser} />
    );
    fireEvent.change(screen.getByLabelText("First name:"), {
      target: { value: changedUser.firstName },
    });
    fireEvent.change(screen.getByLabelText("Last name:"), {
      target: { value: changedUser.lastName },
    });
    fireEvent.change(screen.getByLabelText("Role:"), {
      target: { value: changedUser.role },
    });
    fireEvent.click(
      screen.getByRole("button", {
        name: /submit/i,
      })
    );
    expect(MockedUser).toHaveBeenCalledWith(changedUser);
  });
});
