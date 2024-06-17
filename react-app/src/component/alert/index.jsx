import './styles.scss'
export const Alert = ({ status }) => {
  const styles = {}
  let statusLogo = ''
  switch (status) {
    case 'error':
      styles.backgroundColor = '#ffcdcb'
      styles.borderColor = 'red'
      statusLogo = '❌'
      break
    case 'success':
      styles.backgroundColor = '#bbf2b3'
      styles.borderColor = 'green'
      statusLogo = '✅'
      break
    case 'warning':
      styles.backgroundColor = '#a4a4f5'
      styles.borderColor = 'blue'
      statusLogo = '⚠️'
      break
    case 'info':
      styles.backgroundColor = '#faeb7a'
      styles.borderColor = 'yellow'
      statusLogo = 'i️'
      break
    default:
      break
  }

  return (
    <div className="alert" style={styles}>
      <p className="alert__text">{statusLogo}Lorem ipsum</p>

      <button className="alert__close">x</button>
    </div>
  )
}
