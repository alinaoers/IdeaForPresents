import styles from "./mainContent.module.css";
import { DropDownBox } from "../DropDownBox/dropDownBox";
import { Link } from "react-router-dom"

export function MainContent() {
    return (
        <div className={styles.mainContent}>
            <div className={styles.mainContent}>
            <p className={styles.txt}>Не знаете, что подарить, а праздник уже скоро? Тогда этот сайт для вас! Ищите здесь идеи для подарков, и не забудьте поделиться своей идеей, это поможет другим в будущем!</p>
            </div>

            <div  className={styles.mainContent}>
                <p className={styles.txt}>Поделиться своей идеей</p>
                <DropDownBox/>
                <input type="text" name="название подарка" placeholder="Название подарка" className={styles.questionBlock}/>
                <input type="text" name="стоимость подарка" placeholder="Стоимость подарка" className={styles.questionBlock}/>
                <input type="text" name="название магазина" placeholder="Магазин/сайт" className={styles.questionBlock}/>
                <button type="submit" className={styles.btnSubmit}>Отправить</button>
            </div>

            <div className={styles.mainContent}>
                <p className={styles.txt}>Актуальные подборки</p>
                <div className="actual_block items">
                    <div className={styles.blockActualItem}>
                        <Link to="/actual_block" className={styles.btnListItem}><p className={styles.txtListItem}>Новый год</p></Link>
                    </div>
                    <div className={styles.blockActualItem}>
                        <Link to="/actual_block" className={styles.btnListItem}><p className={styles.txtListItem}>День Рождения</p></Link>
                    </div>
                    <div className={styles.blockActualItem}>
                        <Link to="/actual_block" className={styles.btnListItem}><p className={styles.txtListItem}>8 Марта</p></Link>
                    </div>
                    <div className={styles.blockActualItem}>
                        <Link to="/actual_block" className={styles.btnListItem}><p className={styles.txtListItem}>23 Февраля</p></Link>
                    </div>
                    <button type="button" disabled="disabled" className={styles.txtAdditional}>см. еще</button>
                </div>
            </div>

        </div>
    )
}