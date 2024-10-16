import showcaseStyles from "./showcase.module.css";
export default function ShowcaseImage({ title, desc }) {
  return (
    <div className={showcaseStyles.showcase}>
      <div className={showcaseStyles.showcaseText}>
        <h4>{title}</h4>
        <p>{desc}</p>
        <button className={showcaseStyles.showcaseButton}>See More</button>
      </div>
    </div>
  );
}
