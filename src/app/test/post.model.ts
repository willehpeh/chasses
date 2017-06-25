export class Post {
  createdAt: Date;

  constructor(public title: string, public text: string, public ownerId: string, public owner: string) {
    this.createdAt = new Date();
  }
}
