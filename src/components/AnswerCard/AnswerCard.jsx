import "./AnswerCard.css";

export default function AnswerCard({ title, children }) {
  return (
    <article className="answer-card">
      <div className="answer-card__title-wrapper">
        <h2 className="answer-card__title">{title}</h2>
      </div>
      {children}
    </article>
  );
}
