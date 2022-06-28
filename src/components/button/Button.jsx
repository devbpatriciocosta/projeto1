import style from './Buttonstyle.module.css'

function Button ({ button, onClick }) {
  return (
    <button className={style.button} onClick={onClick}>{ button }</button>
  )
}

export default Button