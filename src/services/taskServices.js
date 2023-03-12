import { db } from "../config/firebase-config";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const taskCollectionRef = collection(db, 'tasks');

class TaskDataService {
    addTask = (newTask) => {
        return addDoc(taskCollectionRef, newTask);
    };

    updateTask = (id, updatedEmp) => {
        const taskDoc = doc(db, 'tasks', id);
        return updateDoc(taskDoc, updateDoc);
    };

    deleteTask = (id) => {
        const taskDoc = doc(db, 'tasks', id);
        return deleteDoc(taskDoc);
    };

    getAllTasks = () => {
        return getDocs(taskCollectionRef);
    };

    getTask = (id) => {
        const taskDoc = doc(db, 'tasks', id);
        return getDoc(taskDoc);
    };
}

export default new TaskDataService;