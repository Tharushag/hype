import styles from "@/styles/checkout.module.scss";

function ProgressBar(props) {
  return (
    <div className={ `${styles['progress']} progress_bar` }>
      <div style={{width: props.done}} className={ styles['progress__bar'] } />
    </div>
  );
}

export default ProgressBar;
