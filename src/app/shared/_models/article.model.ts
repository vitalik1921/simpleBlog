export class Article {
  constructor(
    public id: string,
    public title: string,
    public content: string,
    public userId: any = null,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
    public votes?: number
  ) {}
}
