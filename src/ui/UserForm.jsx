import ButtonRound from "../ui/ButtonRound";
import Input from "../ui/Input";
import styled from "styled-components";
import { HiTrash, HiUserPlus } from "react-icons/hi2";

const UserFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2rem;

  @media screen and (max-width: 780px) {
    padding: 0;
    padding-top: 1.2rem;
  }
`;

const UserField = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: var(--color-grey-0);
  padding: 1.2rem;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s;

  &:hover {
    box-shadow: var(--shadow-md);
  }
`;

const AddUserButton = styled(ButtonRound)`
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;

  & svg {
    width: 2rem;
    height: 2rem;
  }

  @media screen and (max-width: 780px) {
    font-size: 1.2rem;
    padding: 0.8rem 0.5rem;
    margin-left: 1rem;

    & svg {
      width: 1rem;
      height: 1rem;
    }
  }
`;

const RemoveButton = styled(ButtonRound)`
  padding: 0.6rem;

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-red-700);
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 23rem 1fr 1fr;
`;

function UserForm({ fields, remove, append, register }) {
  return (
    <StyledContainer>
      <Label htmlFor="users">List of Users</Label>
      <UserFieldContainer>
        {fields.map((field, index) => (
          <UserField key={field.id}>
            <Input
              id="user"
              type="text"
              placeholder="Enter user name"
              {...register(`users.${index}`)}
            />

            {index > 0 && (
              <RemoveButton
                type="button"
                variation="danger"
                onClick={() => remove(index)}
              >
                <HiTrash />
              </RemoveButton>
            )}
          </UserField>
        ))}

        <AddUserButton
          type="button"
          variation="secondary"
          onClick={() => append("")}
        >
          <HiUserPlus />
          Add User
        </AddUserButton>
      </UserFieldContainer>
    </StyledContainer>
  );
}

export default UserForm;
