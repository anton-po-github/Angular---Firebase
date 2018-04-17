export interface Post {
  text: string;
  likes: number;
}


interface EntityState<V> {
  ids: string[];
  entities: { [id: string]: V }
}

