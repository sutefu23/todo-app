import { Task } from "@/types/task";

const MIGRATION_VERSION_KEY = 'todos_version';
const CURRENT_VERSION = 1;

export const migrateData = (data: any[]): Task[] => {
  const storedVersion = localStorage.getItem(MIGRATION_VERSION_KEY);
  const version = storedVersion ? parseInt(storedVersion, 10) : 0;

  let migratedData = data;

  // Version 0 to 1: Ensure all required fields exist
  if (version < 1) {
    migratedData = data.map((item) => {
      const now = new Date().toISOString();
      return {
        id: item.id || crypto.randomUUID(),
        title: item.title || item.name || 'Untitled Task',
        completed: item.completed ?? item.done ?? false,
        dueDate: item.dueDate || item.deadline || undefined,
        createdAt: item.createdAt || item.created || now,
        updatedAt: item.updatedAt || item.updated || now,
      };
    });
  }

  // Save current version
  localStorage.setItem(MIGRATION_VERSION_KEY, CURRENT_VERSION.toString());

  return migratedData;
};