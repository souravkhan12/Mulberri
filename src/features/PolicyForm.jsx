import { useForm, useFieldArray } from "react-hook-form";
import ButtonRound from "../ui/ButtonRound";
import Textarea from "../ui/Textarea";
import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import { useAddPolicy, useUpdatePolicy } from "../services/usePolicy";
import UserForm from "../ui/UserForm";

function PolicyForm({ policyToEdit = {}, onCloseModal }) {
  const { id: editId, ...editValues } = policyToEdit; // for editing
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, control, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;
  const { fields, append, remove } = useFieldArray({
    name: "users",
    control,
  });

  const { addPolicy, isLoading: isLoading1 } = useAddPolicy({ reset });
  const { updatePolicy, isLoading } = useUpdatePolicy();

  function handleClick(data) {
    console.log(data);
    if (isEditSession) {
      updatePolicy({ id: editId, updatedPolicy: { ...data } });
    } else {
      addPolicy({ ...data });
    }
    onCloseModal?.();
  }
  function onError(error) {}

  return (
    <Form
      onSubmit={handleSubmit(handleClick, onError)}
      type={onCloseModal ? "modal" : ""}
    >
      <FormRow label="Policy no" error={errors?.no?.message}>
        <Input
          type="text"
          id="no"
          disabled={isEditSession}
          {...register("no", { required: "This field is required" })}
        />
      </FormRow>
      <FormRow label="Policy heading" error={errors?.heading?.message}>
        <Input
          type="text"
          id="heading"
          {...register("heading", { required: "This field is required" })}
        />
      </FormRow>
      <FormRow label="Policy status" error={errors?.status?.message}>
        <Input
          type="text"
          id="status"
          {...register("status", { required: "This field is required" })}
        />
      </FormRow>
      <FormRow label="Policy description" error={errors?.description?.message}>
        <Textarea
          type="text"
          id="description"
          defaultValue=""
          {...register("description", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Policy date" error={errors?.heading?.message}>
        <Input
          type="date"
          id="date"
          {...register("date", { required: "This field is required" })}
        />
      </FormRow>

      <UserForm
        fields={fields}
        register={register}
        append={append}
        remove={remove}
      />

      <FormRow>
        <ButtonRound variation="secondary" type="reset" onClick={onCloseModal}>
          Cancel
        </ButtonRound>
        <ButtonRound>
          {isEditSession ? "Edit Policy" : "Add Policy"}
        </ButtonRound>
      </FormRow>
    </Form>
  );
}

export default PolicyForm;
