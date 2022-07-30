export interface IProps {
  dayNotes: API.INotesItem[];
  title: string;
  activeId: string;
  handleChangeId: (id: string) => void;
}

export interface INoteCardProps {
  noteData: API.INotesItem;
  activeId: string;
  handleChangeId: (id: string) => void;
}
