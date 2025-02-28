import { Link } from "react-router-dom";
import { GoIssueOpened, GoComment } from "react-icons/go";
import { relativeDate } from '../helpers/relativeDate';

export function IssueItem(
  { title, number, assignee, comments, completedDate, createdDate, createdBy, dueDate, labels, status
  }) {
  return <li>
    <div>
      {status === "done" || status === "cancelled" ? (
        <GoIssueOpened style={{ color: "red" }} />
      ) : (
        <GoIssueOpened style={{ color: "green" }} />
      )}
    </div>
    <div className="issue--content">
      <span>
        <Link to={`/issue/${number}`}>{title}</Link>
        {labels.map(label => (
          <span
            key={label}
            className={`label red`}>
            {label}
          </span>
        ))}
      </span>
      <small>
        #{number} opened {relativeDate(createdDate)} by {createdBy}
      </small>
    </div>
    {assignee ? <div>{assignee}</div> : null}
    <span className="comment-count">
      {comments.length > 0 ? (
        <>
          <GoComment />
          {comments.length}
        </>
      ) : null}
    </span>
  </li>;
}
