import '../../Components/App/App.css';
import {Component} from "react";
import styles from "./PresentList.module.css"
import { PresentCard } from "../../Components/PresentCard/presentCard"
import {Link} from "react-router-dom";

export default class PresentList extends Component {
    render() {
        return (
            <>
                <Link to="/" className={styles.return}>На главную</Link>
                <div className={styles.mainContent}>
                    <h3>Актаульные подборки</h3>
                    <div className={styles.mainContentLeft}>
                        <p name="#birthday" className={styles.txt}>День Рождения</p>
                        <PresentCard/>
                        <PresentCard/>
                        <PresentCard/>
                        <PresentCard/>
                        <PresentCard/>
                        <PresentCard/>
                    </div>
                    <div className={styles.mainContentLeft}>
                        <p name="#womanDay" className={styles.txt}>8 Марта</p>
                        <PresentCard/>
                    </div>
                    <div className={styles.mainContentLeft}>
                        <p name="#manDay" className={styles.txt}>23 Февраля</p>
                        <PresentCard/>
                    </div>
                </div>
            </>
        )
    }
};