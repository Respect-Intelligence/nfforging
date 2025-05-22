// types.ts
export type ServiceName = "crf" | "foundary";

export const isValidServiceName = (name: string): name is ServiceName => {
  return name === "crf" || name === "foundary";
};
