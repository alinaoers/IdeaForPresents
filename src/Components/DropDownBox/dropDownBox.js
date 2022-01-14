import { useState } from "react";
import styles from './dropDownBox.module.css'

export function DropDownBox() {
    const [curHoliday, setCurHoliday] = useState("");

    const handleChange = (event) => {
        setCurHoliday(event.target.value)
    }

    return (
        <form>
            <select value={curHoliday} defaultValue={"DEFAULT"} onChange={handleChange} className={styles.mainBlock}>
                <option value="DEFAULT" disabled="disabled">Выберитe праздник</option>
                <option value="Birthday">День Рождения</option>
                <option value="NewYear">Новый Год</option>
                <option value="WomenDay">8 Марта</option>
                <option value="MenDay">23 Февраля</option>
            </select>
        </form>
    )
}

export default DropDownBox;