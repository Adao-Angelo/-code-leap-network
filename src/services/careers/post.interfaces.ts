export interface PostCreateDto {
  username: string;
  title: string;
  content: string;
}

export interface PostUpdateDto {
  title?: string;
  content?: string;
}

export interface Post {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
  author_ip: string | null;
}
