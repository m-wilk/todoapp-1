import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal} from "../App.tsx";

type CourseGoalProps = {
    goals: CGoal[];
    onDeleteGoal: (id: number) => void
}

export default function CourseGoalList({goals, onDeleteGoal}: CourseGoalProps) {
return (
    <ul>
    {goals.map((goal) => (
      <li key={goal.id}>
        <CourseGoal 
        id={goal.id}
        onDelete={onDeleteGoal}
        title={goal.title}>
          <p>{goal.description}</p>
        </CourseGoal>
      </li>
    ))}
  </ul>
)
}