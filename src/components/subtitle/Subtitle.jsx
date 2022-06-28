import style from './Subtitlestyle.module.css'

function Subtitle ({ subtitle }) {
  return (
    <h4 className={style.subtitle}>{ subtitle }</h4>
  )
}

export default Subtitle