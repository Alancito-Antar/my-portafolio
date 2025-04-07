export interface Project {
  id: string;
  name: string;
  about: string;
  type: "contractor" | "freelance";
  icon_url?: string;
  tech_stack: [];
}
