export class ProjectClass {
    title:string;
    description:string;
    skills = [];
    img:string;

    constructor(title:string, description:string, skills, img:string) {
        this.title = title
        this.description = description
        this.skills = skills
        this.img = img
    }


}
