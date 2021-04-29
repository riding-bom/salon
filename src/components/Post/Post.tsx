import List from "components/List/List";
import Title from "components/Title/Title";
import { htmlToText } from "html-to-text";
import { Link } from "react-router-dom";

type postProps = {
  id: string;
  className?: string;
  access?: string;
  thumbnail?: string;
  title: string;
  subTitle?: string;
  summary?: string;
  date?: string;
  likeCount: number;
  commentCount?: number;
};
//TODO: access에 따른 render 여부 접근 여부 설정, like, comment 수로 개별 render

const Post = ({
  id,
  className,
  access,
  title,
  subTitle,
  summary,
  date,
  likeCount = 0,
  commentCount = 0,
}: postProps) => {
  const summaryToText = summary ? htmlToText(summary, { wordwrap: null }) : "";

  return (
    <List
      className={className}
      id={id}
      children={
        <Link to={`/${id}`}>
          <div className="post-summary">
            <Title className="title" level={2} children={title} />
            <Title className="subTitle" level={3} children={subTitle} />
            <p className="summary">{summaryToText}</p>
            <div className="post-info">
              <span>{date}</span>
              <span>|</span>
              <span>좋아요 {likeCount > 99 ? "99+" : likeCount}</span>
              <span>|</span>
              <span>레터 {commentCount > 99 ? "99+" : commentCount}</span>
            </div>
          </div>
          <div className="thumbnail" />
        </Link>
      }
    />
  );
};

export default Post;
