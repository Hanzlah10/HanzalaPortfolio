import { Injectable } from "@angular/core";
import { Firestore, collection, collectionData, doc, docData } from "@angular/fire/firestore";
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



    getSingleProject(id: string): Observable<any> {
        const projectDocRef = doc(this.firestore, `projects/${id}`);
        return docData(projectDocRef, { idField: 'id' });
    }

    incrementViews() {
        const viewsRef = doc(this.firestore, 'views', '001')

    }

    getViews() {
        const viewsRef = doc(this.firestore, 'Views/001');
        console.log(viewsRef);

        return docData(viewsRef, { idField: 'id' });
    }
}  
