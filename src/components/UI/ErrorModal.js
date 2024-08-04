import Container from "./Container";
import styles from './ErrorModal.module.css';
import Button from "./Button";

const ErrorModal = (props) => {
    return (
        <div>
            {props.showError && (
                <div>
                    <div className={styles.backdrop} onClick={props.onClose}></div>
                    <Container className={styles.modal}>
                        <header className={styles.header}>
                            <h2>Mistake</h2>
                        </header>
                        <div className={styles.content}>
                            <p>Please enter the task</p>
                        </div>
                        <footer className={styles.actions}>
                            <Button onActive={props.onClose}>Close</Button>
                        </footer>
                    </Container>
                </div>
            )}
        </div>
    )
}

export default ErrorModal;