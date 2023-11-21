export class ProjectClass {
    title:string;
    description:string;
    skills = [];
    img:string;
    link:string;

    constructor(title:string, description:string, skills, img:string, link:string) {
        this.title = title
        this.description = description
        this.skills = skills
        this.img = img
        this.link = link
    }


}
