import styles from './TaskList.module.css';
import Container from '../UI/Container';

const TaskList = (props) => {
    const deleteTask = (taskId) => {
        props.onDeleteTask(taskId);
    }


    return (
        <Container className={styles.tasks}>
            <ul>
                {props.tasks.map(task => 
                    <li key={task.id} onClick={() => deleteTask(task.id)}>
                        <div className={styles.taskName}>{task.taskName}</div>
                        <div className={styles.taskComment}>{task.comment}</div>
                    </li>
                )}
            </ul>
        </Container>
    )
}

export default TaskList;