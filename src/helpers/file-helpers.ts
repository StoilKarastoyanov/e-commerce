import fs from "fs/promises";
import path from "path";
import { CategoryType } from "../components/types";

export const getData = async (category?: CategoryType, id?: string) => {
  const filePath = path.join(process.cwd(), "data", "data.json");

  try {
    const jsonData = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(jsonData);

    if (!id) {
      return data.filter((item: { category: CategoryType }) => item.category === category);
    } else {
      return data.find((item: { id: string }) => item.id === id);
    }
  } catch (error) {
    console.error("Error reading data file:", error);
    return null;
  }
};