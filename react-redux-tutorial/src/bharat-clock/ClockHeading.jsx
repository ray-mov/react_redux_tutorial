import styles from"./ClockHeading.module.css"
console.log(styles.ClockHeading)

let ClockHeading = () => {
return <h1 class={`${styles["clock-header"]} fw-bold fs-1v`}>Bharat Clock</h1>
}

export default ClockHeading