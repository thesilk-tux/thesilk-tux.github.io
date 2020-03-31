export interface IBlogOverview {
  caption: string;
  createdAt: string;
  filename: string;
  id: number;
  imageSrc: string;
  imageUrl: string;
  leadParagraph: string;
  updatedAt: string;
}

export interface IBlogEntry {
  id?: number;
  createdAt?: string;
  updatedAt?: string;
  imgSrc?: string;
  imageUrl?: string;
  content?: any[];
}
