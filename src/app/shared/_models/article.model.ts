export class Article {
  constructor(
    public id: string,
    public title: string,
    public content: string,
    public userId: string,
    public createdAt: Date,
    public updatedAt: Date,
    public votes: number = 0
  ) {}
}
