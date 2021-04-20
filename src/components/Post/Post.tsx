import Title from "components/Title/Title"

type postProps = {
  className?: string;
  access?: string;
  thumbnail?: string;
  title: string;
  subTitle?: string;
  summary?: string;
  date?: string;
  likeCount?: number;
  commentCount?: number;
}
//TODO: access에 따른 render 여부 접근 여부 설정

const Post = ({ className, access, thumbnail, title, subTitle, summary, date }: postProps ) => {
  const reg = /<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig
  const summaryWithoutTag = summary ? summary.replace(reg, "") : "";

  return (
    <li className={className}>
      <div className="post-summary">
        <Title level={2} children={title} />
        <Title level={3} children={subTitle} />
        <p>{summaryWithoutTag}</p>
        <span>{date}</span>
      </div>
      { thumbnail
          ? <img src={thumbnail} alt="thumbnail" />
          : null
      }
      {/*
      access
      thumbnail
      title
      subtitle
      summary
      date
      likeCount
      commentCount
       */}
    </li>
  )
}

export default Post
