import React from 'react'
import styles from './Slogan.module.css'
import Typing from "react-typing-animation"


export default function Slogan() {

    return (
        <div className={styles.root}>
            <Typing speed={100}>
                <h2 className={styles.text}>We are glad to get in touch with you!</h2>
            </Typing>
        </div>
    )
}