import block_styles from '../../styles/components/InfoBlockWrapper.module.scss'
import styles from '../../styles/components/Weather.module.scss'

const Weather = () => {
    return(
        <>
            {/*<div className={block_styles.title}>Погода</div>*/}
            <div className={styles.weather_temperature_wrapper}>
                <div className={[styles.weather_icon]}></div>
                <div className={styles.weather_temperature}>−1°</div>
                <ul>
                    <li>днем +1°</li>
                    <li>вечером -1°</li>
                </ul>
            </div>
            <div className={styles.weather_temperature_wrapper}>
                <div className={styles.traffic_icon}></div>
                <div className={styles.weather_temperature}>5</div>
                <ul>
                    <li>Ближайшие 5 часов движение затруднено</li>

                </ul>
            </div>
        </>
    )
}

export default Weather