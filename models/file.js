export class File{
    constructor(title,fileUri){
        this.title=title;
        this.id=new Date().toString()+Math.random().toString();
        this.fileUri=fileUri;
        
    }
}
