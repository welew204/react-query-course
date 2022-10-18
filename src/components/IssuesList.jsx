import { useQuery } from "react-query";
import {GoIssueClosed} from "react-icons/go";
import { IssueItem } from "./IssueItem";

export default function IssuesList() {
  const issuesQuery = useQuery(
    ["issues"],
    () => {return fetch("/api/issues").then(res => {
      return res.json()})
    }
  )
  
  
  return (
    <div>
      <h2>Issues List</h2>
      {issuesQuery.isLoading ? <p>...Loading...</p> :
        <ul className="issues-list">
          {issuesQuery.data.map((issue) => 
            <IssueItem
              key={issue.id}
              title={issue.title}
              number={issue.number}
              assignee={issue.assignee}
              comments={issue.comments}
              completedDate={issue.completedDate}
              createdDate={issue.createdDate}
              createdBy={issue.createdBy}
              dueDate={issue.dueDate}
              labels={issue.labels}
              status={issue.status}
              />)}
        </ul>
      }
    </div>
  );
}
