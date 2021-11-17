import InfoBlockWrapper from "../index/InfoBlockWrapper";
import styles from '../../styles/components/FiveCol.module.scss'
import Weather from "../blocks/Weather";
import News from "../blocks/News";

const FiveCol = () => {
    return(
        <div className={styles.grid}>
            <InfoBlockWrapper content=<Weather/> />
            <InfoBlockWrapper content=<News/> />
            <InfoBlockWrapper/>
            <InfoBlockWrapper/>
            <InfoBlockWrapper/>
        </div>
    )
}

export default FiveCol