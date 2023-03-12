import { db } from "../config/firebase-config";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const empCollectionRef = collection(db, 'employee');

class EmpDataService {
    addEmployee = (newEmp) => {
        return addDoc(empCollectionRef, newEmp);
    };

    updateEmployee = (id, updatedEmp) => {
        const empDoc = doc(db, 'employee', id);
        return updateDoc(empDoc, updateDoc);
    };

    deleteEmployee = (id) => {
        const empDoc = doc(db, 'employee', id);
        return deleteDoc(empDoc);
    };

    getAllEmployees = () => {
        return getDocs(empCollectionRef);
    };

    getEmployee = (id) => {
        const empDoc = doc(db, 'employee', id);
        return getDoc(empDoc);
    };
}

export default new EmpDataService;