import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList.tsx";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        title: goal,
        description: summary,
        id: Math.random(),
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals(prevGols => prevGols.filter((goal) => goal.id !== id))
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "App logo" }}>
        <h1>Your Course Goal</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}/>
      <CourseGoalList onDeleteGoal={handleDeleteGoal} goals={goals}/>
    </main>
  );
}
