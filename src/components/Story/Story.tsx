import "./story.css";

interface StoryProps {
  image: string;
  date?: string;
  title: string;
  author: string;
}

function Story(props: StoryProps) {
  return (
    <article
      style={{ backgroundImage: `url(${props.image})` }}
      className="story-article"
    >
      <div className="tint"></div>
      {props.date ? <p className="story-date">{props.date}</p> : ""}
      <h2 className="story-title">{props.title}</h2>
      <h4 className="story-author">by {props.author}</h4>
      <a href="#" className="story-link">
        Read story
      </a>
    </article>
  );
}

export default Story;
