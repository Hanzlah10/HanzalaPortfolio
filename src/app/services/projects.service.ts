import { Injectable } from "@angular/core";
import { Firestore, collection, collectionData } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { projectsInterface } from "../types/project.interface";

@Injectable({
    providedIn: 'root'
})

export class ProjectsService {
    constructor(private firestore: Firestore) { }

    getAllProjects(): Observable<any[]> {
        const projectsData = collection(this.firestore, 'projects');
        return collectionData(projectsData, { idField: 'id' });
    }

}   