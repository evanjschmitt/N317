import styles from "./page.module.css";


export default function RandomImage({imageInfo}) {
    return (
        <div className={styles.randomImage}>
      <img src={imageInfo.imag} width={150} height={150} />
      <div>
        <h3>{imageInfo.title}</h3>
        <p>{imageInfo.description}</p>
      </div>
      </div>
    );
}