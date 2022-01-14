import styles from './header.module.css'
import { Link } from "react-router-dom"

export function Header() {
    return (
        <div className={styles.header}>
            <img className={styles.headImg} src="https://veliki.com.ua/files/2019/12_27/16_23/u_files_store_31_13534.jpg"/>
            <h1 className={styles.headTitle}>Идеи для подарков на все случаи жизни</h1>
            <div className={styles.emptyBlock}></div>
            <Link to="/login" className={styles.headTitleBtnLogin}><p className={styles.headBtnText}>ВХОД</p></Link>
            <Link to="/register" className={styles.headTitleBtnRegister}><p className={styles.headBtnText}>РЕГИСТРАЦИЯ</p></Link>
        </div>
    )
}