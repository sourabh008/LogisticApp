import React from 'react'
import Form from 'rc-field-form';

const FormWrapper = ({ getFormValues, failedState,form,children }) => {
    return (
        <Form
            form={form}
            onFinish={values => {
                getFormValues(values)
            }}        
            onFinishFailed={(values)=>{            
                console.log('failed')
            }}
             >
            {children}
        </Form>
    )
}
export default FormWrapper