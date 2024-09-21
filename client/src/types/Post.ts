export interface IPost {
  id: string;
  title: string;
  date: string;
  length: number;
  preview: string;
  categories: string[];
  image: string;
}

export interface PostProps {
  post: IPost;
}
