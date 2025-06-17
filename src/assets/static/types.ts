// types.ts
export type ServiceName = "crf" | "foundry";

export const isValidServiceName = (name: string): name is ServiceName => {
  return name === "crf" || name === "foundry";
};
export interface Milestone {
  year: string;
  title: string;
  description: string;
  isLeft: boolean;
}
