import styles from'../../styles/header_styles/Header.module.scss'
import {useState} from "react";

const Header = () => {
    const [value, setValue] = useState('Найдется все')
    const [searchBtnOpacity, setSearchBtnOpacity] = useState(0)
    const handleOnFocus = () => {
        setValue('')
    }
    const handleOnChange = event => {
        setValue(event.target.value)
        setSearchBtnOpacity(1)
    }
    const handleFocusOut = () => {
        setSearchBtnOpacity(0)
        setValue(value ? value : 'Найдется все')
    }
    return(
        <div className={styles.header}>
            <div className={styles.header_grid}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '70px auto'
                }}>
                    <img src="logo.svg" width={50} height={50}/>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'auto 40px',
                        gridColumnGap: 20,
                        alignItems: 'center'
                    }}>
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            flex: 1,
                            height: '100%'
                        }}>
                            <input
                                type="text"
                                placxeholder="Найдется все"
                                value={value}
                                className={styles.header_input}
                                onChange={handleOnChange}
                                onFocus={handleOnFocus}
                                onBlur={handleFocusOut}
                            />
                            <div style={{
                                position: "absolute",
                                top: 6,
                                right: 6,
                                background: searchBtnOpacity ? '#ffcc00' : 'transparent',
                                borderRadius: '35px',
                                height: 38,
                                display: 'flex',
                                flex: 1,
                                alignItems: 'center',
                                paddingLeft: 16,
                                paddingRight: 16,
                                color: searchBtnOpacity ? '#333333' : '#90919d',
                                cursor: 'pointer'
                            }}>
                                Найти
                            </div>
                        </div>
                        <img src="okniks.svg" width={30} height={30}/>
                    </div>
                </div>
                <div style={{
                    color: '#90919d',
                    display: 'grid',
                    gridTemplateColumns: 'auto auto 70px',
                    alignItems: 'center'
                }}>
                       <div>
                            <svg className="geolink__button" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                 viewBox="0 0 16 16">
                                <path fill="currentColor"
                                      d="M13.07 3.58l-4 9.98a.5.5 0 0 1-.95-.06L7 9 2.5 7.88a.5.5 0 0 1-.06-.95l9.98-4a.5.5 0 0 1 .65.65z"></path>
                            </svg>
                           <span style={{paddingLeft: 4}}> Москва 16 ноября 19:36</span>
                       </div>
                       <div></div>
                       <div style={{
                           width: 40,
                           height: 40,
                           borderRadius: 100,
                           backgroundImage: 'url("https://yastatic.net/s3/home-static/_/l/1/pBDY-_uztTxguD094jO_rE0BA.svg")',
                           backgroundRepeat: "no-repeat",
                           backgroundSize: "cover",
                           display: "flex",
                           alignItems: 'center',
                           justifyContent: "center",
                           cursor: "pointer"
                       }}>
                           <div style={{
                               width: 30,
                               height: 30,
                               borderRadius: 100,
                               backgroundImage: 'url("https://avatars.mds.yandex.net/get-yapic/30955/GDkb4gOYTiYYDbJYl6lLHf8QvI-1/islands-68")',
                               backgroundRepeat: "no-repeat",
                               backgroundSize: "cover"
                           }}>
                           </div>
                       </div>
                </div>
            </div>
        </div>
    )
}

export default Header