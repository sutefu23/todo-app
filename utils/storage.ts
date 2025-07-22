import { Task } from "@/types/task";
import { STORAGE_KEY } from "./constants";

export const loadTasks = (): Task[] => {
  if (typeof window === "undefined") return [];
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    
    const tasks = JSON.parse(stored);
    
    // データ検証
    if (!Array.isArray(tasks)) return [];
    
    return tasks.filter((task): task is Task => {
      return (
        typeof task === "object" &&
        task !== null &&
        typeof task.id === "string" &&
        typeof task.title === "string" &&
        typeof task.completed === "boolean" &&
        typeof task.createdAt === "string" &&
        typeof task.updatedAt === "string" &&
        (task.dueDate === undefined || typeof task.dueDate === "string")
      );
    });
  } catch (error) {
    console.error("Failed to load tasks from localStorage:", error);
    return [];
  }
};

export const saveTasks = (tasks: Task[]): void => {
  if (typeof window === "undefined") return;
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error("Failed to save tasks to localStorage:", error);
  }
};