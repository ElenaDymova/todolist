import Button from "../UI/Button";
import Container from "../UI/Container";
import ErrorModal from "../UI/ErrorModal";
import styles from './CreateTask.module.css';
import React, { useState } from "react";

const CreateTask = (props) => {

    const [inputName, setInputName] = useState('');
    const [inputComment, setInputComment] = useState('');
    const [error, setError] = useState(false);

    const createTaskHandler = (event) => {
        event.preventDefault();
        if (inputName.trim().length === 0) {
            setError(true);
            return
        }

        props.onCreateTask(inputName, inputComment);
        setInputName('');
        setInputComment('');
        setError(false); 
    }

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
    }

    const commentChangeHandler = (event) => {
        setInputComment(event.target.value);
    }

    const closeErrorModalHandler = () => {
        setError(false);
    }

    return (
        <div>
            <ErrorModal showError={error} onClose={closeErrorModalHandler}/>
            <div style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '30px', marginTop: '20px' }}>To-Do List</div>
            <Container className={styles.input}>
                <form onSubmit={createTaskHandler}>
                    <label htmlFor="name">Task name</label>
                    <input id="name" type="text" onChange={nameChangeHandler} value={inputName}/>
                    <label htmlFor="comment">Commentary</label>
                    <input id="comment" type="text" onChange={commentChangeHandler} value={inputComment}/>
                    <Button type="submit" >Add task</Button>
                </form>
            </Container>
        </div>
    )
}

export default CreateTask;