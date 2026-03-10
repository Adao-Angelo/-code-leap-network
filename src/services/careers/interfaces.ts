export interface CareerCreateDto {
  username: string;
  title: string;
  content: string;
}

export interface CareerUpdateDto {
  title?: string;
  content?: string;
}

export interface Career {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
  author_ip: string | null;
}
