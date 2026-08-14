// import {
//     addDoc,
//     collection,
//     deleteDoc,
//     doc,
//     getDoc,
//     getDocs,
//     updateDoc,
// } from "firebase/firestore";
// import { db } from "../firebase/config";

// class JobService {
//     private collectionRef = collection(db, "jobs");

//     // Get All
//     async getAll<T>() {
//         const querySnapshot = await getDocs(this.collectionRef);

//         const data = querySnapshot.docs.map((doc) => ({
//             id: doc.id,
//             ...doc.data(),
//         })) as T[];
//         console.log("data", data)
//         return { data };
//     }

//     // Get By Id
//     async getById<T>(id: string) {
//         const document = await getDoc(doc(db, "jobs", id));

//         if (!document.exists()) {
//             throw new Error("Job not found");
//         }

//         return {
//             data: {
//                 id: document.id,
//                 ...document.data(),
//             } as T,
//         };
//     }

//     // Add
//     async create<T>(job: Omit<T, "id">) {
//         const document = await addDoc(this.collectionRef, {
//             ...job,
//         });

//         return document.id;
//     }

//     // Update
//     async update<T>(id: string, job: Partial<T>) {
//         await updateDoc(doc(db, "jobs", id), {
//             ...job,
//         });
//     }

//     // Delete
//     async delete(id: string) {
//         await deleteDoc(doc(db, "jobs", id));
//     }
// }

// export default new JobService();
// services/job-service.ts
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/config";

class JobService {
    private collectionRef = collection(db, "jobs");

    // Get All
    async getAll<T>() {
        const querySnapshot = await getDocs(this.collectionRef);

        const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        })) as T[];
        console.log("data", data);
        return { data };
    }

    // Get By Id
    async getById<T>(id: string) {
        const document = await getDoc(doc(db, "jobs", id));

        if (!document.exists()) {
            throw new Error("Job not found");
        }

        return {
            data: {
                id: document.id,
                ...document.data(),
            } as T,
        };
    }

    // Add
    async create<T>(job: Omit<T, "id">) {
        const document = await addDoc(this.collectionRef, {
            ...job,
        });
        return document.id;
    }

    // Update
    async update<T>(id: string, job: Partial<T>) {
        await updateDoc(doc(db, "jobs", id), {
            ...job,
        });
    }

    // Delete
    async delete(id: string) {
        await deleteDoc(doc(db, "jobs", id));
    }
}

export default new JobService();