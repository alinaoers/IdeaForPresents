import {Component} from "react";
import styles from "./Login.module.css"
import {Link} from "react-router-dom";

export default class Login extends Component {
    render() {
        return (
            <>
                <Link to="/" className={styles.return}>На главную</Link>
                <div className={styles.mainContent}>
                    <h3>Вход</h3>
                    <input type="text" required name="название подарка" placeholder="Имя пользователя" className={styles.questionBlock}/>
                    <input type="password" required name="стоимость подарка" placeholder="Пароль" className={styles.questionBlock}/>
                    <button type="submit" className={styles.btnSubmit}>Войти</button>
                </div>
            </>
        )
    }
};