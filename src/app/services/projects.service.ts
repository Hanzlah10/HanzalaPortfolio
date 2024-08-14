import { Injectable } from "@angular/core";
import { Firestore, collection, collectionData, doc, docData, runTransaction } from "@angular/fire/firestore";
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
        const docRef = doc(this.firestore, `Views/001}`);

        return runTransaction(this.firestore, async (transaction) => {
            const docSnap = await transaction.get(docRef);
            if (!docSnap.exists()) {
                transaction.set(docRef, { viewsCount: 1 });
            } else {
                const newCount = (docSnap.data()["viewsCount"] || 0) + 1;
                transaction.update(docRef, { viewsCount: newCount });
            }
        }).then(() => {
            console.log('Views count incremented');
        }).catch((error) => {
            console.error('Error incrementing views count:', error);
        });
    }

    getViews() {
        const viewsRef = doc(this.firestore, 'Views/001');
        return docData(viewsRef, { idField: 'id' });
    }
}  
