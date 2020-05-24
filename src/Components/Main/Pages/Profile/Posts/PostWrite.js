import React from "react";
import c from "./PostWrite.module.css"
import {Field, reduxForm} from "redux-form";
import {MaxLengthCreator, required} from "../../../../../Utilites/Validators/validator";
import {Textarea} from "../../../../Items/Forms/FormsControls";

const maxLength10 = MaxLengthCreator(10);

function PostWrite(props) {

    let onSubmit = (event) => {
        props.addPost(event.newPostText);
    };

    return (<PostReduxWrite onSubmit={onSubmit}/>);
}
function PostWriteForm(props) {

    return (<form onSubmit={props.handleSubmit}>
            <div>
                <Field className={c.postWrite}
                       component={Textarea}
                       name={"newPostText"}
                       rows="6"
                       typeField="textarea"
                       validate={[required, maxLength10]}
                       placeholder={"Введите тест поста"}/>
            </div>
            <div>
                <button className="btn-simple">
                    Отправить
                </button>
            </div>
        </form>
    );
}

const PostReduxWrite = reduxForm({form: 'sendPost'})(PostWriteForm);


export default PostWrite;