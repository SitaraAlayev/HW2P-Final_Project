export class Folder{
    constructor(title,folderUri){
        this.title=title;
        this.id=new Date().toString()+Math.random().toString();
        this.folderUri=folderUri;

    }
}