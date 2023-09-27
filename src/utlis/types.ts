export type noteType = {
  id: string;
  title: string;
  subtitle: string;
  email: string;
  note: string;
  type: string;
  image: string;
  pinned: boolean;
  color: string;
  createdAt: string;
};

export type PaginationProps = {
  data: noteType[];
  itemsPerPage: number;
}
