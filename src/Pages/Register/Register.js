// import '../../Components/App/App.css';
import {Component} from "react";
import styles from "./Register.module.css"
import {Link} from "react-router-dom"

export default class Register extends Component {
    render() {
        return (
            <>
                <Link to="/" className={styles.return}>На главную</Link>
                <div className={styles.mainContent}>
                    <h3>Регистрация</h3>
                    <p className={styles.hints}>Введите имя пользователя (оно будет видно всем пользователям этого сервиса):</p>
                    <input type="text" required placeholder="Имя пользователя" className={styles.questionBlock}/>
                    <p className={styles.hints}>Введите ФИО полностью:</p>
                    <input type="text" required placeholder="ФИО" className={styles.questionBlock}/>
                    <p className={styles.hints}>Укажите свою phystech.edu почту, если хотите получать рассылку:</p>
                    <input type="email" pattern=".+@phystech\.edu" required placeholder="Почтовый адрес" className={styles.questionBlock}/>
                    <p className={styles.hints}>Придумайте пароль:</p>
                    <input type="password" required placeholder="Пароль" className={styles.questionBlock}/>
                    <p className={styles.hints}>Подтвердите пароль:</p>
                    <input type="password" required placeholder="Пароль" className={styles.questionBlock}/>
                    <button type="submit" className={styles.btnSubmit}>Зарегестрироваться</button>
                </div>
            </>
        )
    }
};