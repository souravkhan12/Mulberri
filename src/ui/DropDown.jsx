import { BsThreeDots } from "react-icons/bs";
import styled from "styled-components";
import PolicyForm from "../features/PolicyForm";
import Modal from "./Modal";
import Menus from "./Menus";

const Div = styled.div`
  position: absolute;
  margin-left: 90%;
  margin-top: -0.3rem;
  & svg {
    width: 2rem;
    height: 2rem;
  }
  &:hover {
    cursor: pointer;
  }
`;

function DropDown({ policy }) {
  const { id } = policy;
  return (
    <Div>
      <Modal>
        <Menus>
          <Menus.Menu>
            <Menus.Toggle id={id} />

            <Menus.List id={id}>
              <Modal.Open opens="edit">
                <Menus.Button>Edit</Menus.Button>
              </Modal.Open>
            </Menus.List>
            <Modal.Window name="edit">
              <PolicyForm policyToEdit={policy} />
            </Modal.Window>
          </Menus.Menu>
        </Menus>
      </Modal>
    </Div>
  );
}

export default DropDown;
