import { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { BsThreeDots } from "react-icons/bs";
import PolicyForm from "../features/PolicyForm";

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-sm);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

const DropdownItem = styled.div`
  padding: 0.8rem 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: var(--color-grey-100);
  }
`;

function PolicyDropdown({ policy }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Modal>
      <DropdownContainer>
        <div onClick={() => setIsOpen((prev) => !prev)}>
          <BsThreeDots />
        </div>

        {isOpen && (
          <DropdownMenu>
            <Modal.Open opens="menu-form">
              <DropdownItem onClick={() => setIsOpen(false)}>Edit</DropdownItem>
            </Modal.Open>
          </DropdownMenu>
        )}
      </DropdownContainer>

      <Modal.Window name="menu-form">
        <PolicyForm policyToEdit={policy} />
      </Modal.Window>
    </Modal>
  );
}
export default PolicyDropdown;
