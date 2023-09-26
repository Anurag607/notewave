import { categoryList } from "./categories";

export type noteType = {
  id: number;
  title: string;
  subTitle: string;
  email: string;
  content: string;
  type: string;
};

export type searchParamsType = {
  keywords: string;
  location: string;
};

export type SelectMenuOption = (typeof categoryList)[number];
