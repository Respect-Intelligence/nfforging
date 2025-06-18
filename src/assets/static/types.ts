// types.ts
export type ServiceName = "crf" | "foundry" | "fabrication" | "services";

export const isValidServiceName = (name: string): name is ServiceName => {
  return (
    name === "crf" ||
    name === "foundry" ||
    name == "services" ||
    name == "fabrication"
  );
};
// export const isValidProductName = ({
//   serviceName,
//   productname,
// }: {
//   serviceName: string;
//   productname: string;
// }): productname is ServiceName => {
//   return true;
// };
export interface Milestone {
  year: string;
  title: string;
  description: string;
  isLeft: boolean;
}
