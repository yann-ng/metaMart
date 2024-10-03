import styles from '../styles/toggle.module.css';

function Toggle() {
  return (
    <div> 
      <label class={styles.switch}>
          <input type="checkbox" />
          <span class={styles.slider}></span>
      </label>
    </div>
  )
}

export default Toggle;