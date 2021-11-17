import styles from '../../styles/components/InfoBlockWrapper.module.scss'

const InfoBlockWrapper = ({content}) => {
    return(
        <div className={styles.info_block_wrapper}>
            {content}
        </div>
    )
}

export default InfoBlockWrapper