import ButtonRound from "../ui/ButtonRound";

import { HiDocumentAdd } from "react-icons/hi";
import PolicyForm from "./PolicyForm";
import Modal from "../ui/Modal";

function AddPolicy() {
  return (
    <Modal>
      <Modal.Open opens="policy-form">
        <ButtonRound>
          <HiDocumentAdd />
          Add Policy
        </ButtonRound>
      </Modal.Open>
      <Modal.Window name="policy-form">
        <PolicyForm />
      </Modal.Window>
    </Modal>
  );
}
export default AddPolicy;
