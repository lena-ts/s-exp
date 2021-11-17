import styles from '../../styles/components/News.module.scss'
import block_styles from "../../styles/components/InfoBlockWrapper.module.scss";

const News = () => {
    return(
        <>
        {/*<div className={block_styles.title}>Новости</div>*/}
        <ul className={styles.list}>
            <li className={styles.link}>
                <img src={'https://avatars.mds.yandex.net/get-ynews-logo/50744/1551-1563808847385-square/logo-square'} />
                Кабмин утвердил перечень районов Крайнего Севера и приравненных к ним территорий
            </li>
            <li className={styles.link}>
                <img src={'https://avatars.mds.yandex.net/get-ynews-logo/135513/1040-1478692902361-square/logo-square'} />
                В квартире задержанного по подозрению в педофилии депутата от КПРФ Самсонова идут обыски
            </li>
        </ul>
        </>
    )
}

export default News