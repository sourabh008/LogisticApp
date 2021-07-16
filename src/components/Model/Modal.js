import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";

import Button from "../Button";
import Input from "../rcForm";
import FormWrapper from "../RcFormWrapper";

import "./modal.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal({
  modalState,
  closeModal,
  getFormValue,
  form,
  isUpdate,
  value,
}) {
  // const regxForNum = /^[a-z]+$/;
  const rules = [{ required: true }];

  return (
    <div>
      <Dialog
        open={modalState}
        TransitionComponent={Transition}
        onClose={closeModal}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <FormWrapper getFormValues={getFormValue} form={form}>
          <div className="inputModel">
            <Input name="body" form={form} rules={rules} label="Body" />
            <br />
            <Input name="title" form={form} rules={rules} label="Tital" />
            <br />
            <Input name="description" form={form} label="Description" />
            <br />

            <DialogActions>
              <Button color="primary" oncilck={closeModal} text="Cancel" />
              <Button
                color="primary"
                type="Save"
                text={isUpdate ? "Update" : "submit"}
              />
            </DialogActions>
          </div>
        </FormWrapper>
      </Dialog>
    </div>
  );
}
