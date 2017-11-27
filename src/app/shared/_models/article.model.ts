export class Article {
  _id: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  content: string;
  votes: number;

  constructor(title: string,
    content: string,
    userId: any = null,
    createdAt: Date = new Date(),
    updatedAt: Date = new Date(),
    votes?: number) {

    this.title = title;
    this.content = content;
    this.userId = userId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.votes = votes || 0;
    return this;
  }
}
