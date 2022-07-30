declare namespace API {
  interface IParams {
    page_now: number;
    page_size: number;
  }
  export interface INotes {
    code: number;
    msg: string;
    data: INotesData;
  }
  export interface INotesData {
    list: INotesItem[];
    page: Page;
  }
  export interface INotesItem {
    id: string;
    title: string;
    duration: number;
    create_time: string;
  }
  export interface Page {
    page_now: number;
    page_size: number;
    page_total: number;
    total_num: number;
  }
  export interface IMeetingMap {
    [key: string]: API.INotesItem[];
  }
  export interface IContentProp {
    meetingList: INotesItem[];
    activeId: string;
  }
  export interface IMeetingListProp {
    isLoading: boolean;
    activeId: string;
    changeActiveId: (id: string) => void;
  }
}
