import { JSX } from "react";

export interface InitialStateProps {
  sections: ActiveSection[];
  activeSection: ActiveSection;
}
export interface ActiveSection {
  title: string;
  content: JSX.Element;
}
