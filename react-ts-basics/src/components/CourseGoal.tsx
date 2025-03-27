import { FC, type ReactNode } from "react";

interface CourseGoalProps {
  id: number;
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void
}


export default function CourseGoal({ title, children, id, onDelete }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button onClick={() => onDelete(id)}>DELETE</button>
    </article>
  );
}




// const CourseGoal: FC<CourseGoalProps> = ({title, children}) => {
//     return (
//             <article>
//               <div>
//                 <h2>{title}</h2>
//                 <p>{children}</p>
//               </div>
//               <button>DELETE</button>
//             </article>
//           );
// }

// export default CourseGoal;

