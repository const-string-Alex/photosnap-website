import "./story.css";

interface StoryProps {
  image: string;
  date?: string;
  title: string;
  author: string;
}

function Story(props: StoryProps) {
  return (
    <article className="story-article">
      <img src={props.image} alt="Article story" />
      <div className="tint"></div>
      <div className="story-info">
        {props.date ? <p className="story-date">{props.date}</p> : ""}
        <h2 className="story-title">{props.title}</h2>
        <h4 className="story-author">by {props.author}</h4>
      </div>
    </article>
  );
}

export default Story;
