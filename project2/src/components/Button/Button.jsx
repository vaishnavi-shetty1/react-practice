import { MdMessage } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import styles from './Button.module.css'

const Button = (props) => {
  return (
    <button className={styles.primary_btn}>
      {props.icon}
      {props.text}
    </button>
  )
}

export default Button