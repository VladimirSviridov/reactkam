import React from "react";
import c from "./MessageWrite.module.css";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../../Items/Forms/FormsControls";
import {MaxLengthCreator, required} from "../../../../../Utilites/Validators/validator";

const maxLength15 = MaxLengthCreator(15);

function MessageWrite(props) {

    let onSubmit = (values) => {
        props.addMessage(values.newMessageBody);
    };

    return (
        <MessageReduxWrite onSubmit={onSubmit} />
    );
}

function MessageWriteForm(props) {

    return (<form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Введите сообщение"}
                       name={"newMessageBody"}
                       component={Textarea}
                       typeField="textarea"
                       validate={[required, maxLength15]}
                       className={c.messageWrite}
                       rows="3"/>
            </div>
            <div>
                <button className="btn-simple">
                    Отправить
                </button>
            </div>
        </form>
    );
}

const MessageReduxWrite = reduxForm({form: 'sendMessage'})(MessageWriteForm);

export default MessageWrite;