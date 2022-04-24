class Folder{
    constructor(title,imageUri){
        this.title=title;
        this.id=new Date().toString()+Math.random().toString();
        this.imageUri=imageUri;



    }
}