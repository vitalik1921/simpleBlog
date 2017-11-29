export class Article {
  constructor(
    public title: string,
    public content: string,
    public userId: any = null,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
    public votes?: number
  ) {}
}
