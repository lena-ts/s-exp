import styles from '../../styles/components/Serviceicon.module.scss'
const ServiceIcon = ({image, title}) =>{
    return(
        <div  className={styles.service_icon}>
            <div className={styles.service_icon_image}
                 style={{
                     backgroundImage: `url(${image})`,
                 }}

            >
            </div>
            {title}
        </div>
    )
}

export default ServiceIcon