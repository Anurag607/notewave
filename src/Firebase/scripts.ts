import { db, storage } from "./ClientApp";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  query,
  getDoc,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { setNoteData, setBackupData } from "../redux/reducers/noteSlice";

// Add Note
const addNote = async (note: any) => {
    try {
        const docRef = await addDoc(collection(db, "notes"), {
            ...note,
            createdAt: serverTimestamp(),
        });
        return docRef.id;
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

// Get Notes
const getNotes = async (reduxDispatch: React.Dispatch<any>) => {
    const q = query(collection(db, "notes"));
    const querySnapshot = await getDocs(q);
    let notes: any = [];
    querySnapshot.forEach((doc) => {
        notes.push({ ...doc.data(), id: doc.id });
    });
    const pinnedNotes = notes.filter((note: any) => note.pinned).sort((a: any, b: any) => b.createdAt - a.createdAt);
    const unpinnedNotes = notes.filter((note: any) => !note.pinned).sort((a: any, b: any) => b.createdAt - a.createdAt);
    notes = [...pinnedNotes, ...unpinnedNotes];
    reduxDispatch(setNoteData(notes));
    reduxDispatch(setBackupData(notes));
    return notes;
};

// Get Note
const getNote = async (id: string) => {
    const docRef = doc(db, "notes", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return { ...docSnap.data(), id: docSnap.id };
    } else {
        console.log("No such document!");
    }
};

// Update Note
const updateNote = async (id: string, note: any, reduxDispatch: React.Dispatch<any>) => {
    const docRef = doc(db, "notes", id);
    await setDoc(docRef, note);
    await getNotes(reduxDispatch);
};

// Delete Note
const deleteNote = async (id: string, reduxDispatch: React.Dispatch<any>) => {
    const docRef = doc(db, "notes", id);
    await deleteDoc(docRef);
    await getNotes(reduxDispatch);
};

// Upload Image
const uploadImage = async (note:any, file: any, secondary: string, id: string, reduxDispatch: React.Dispatch<any>) => {
    let image = "";
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
        },
        (error) => {
            console.log(error);
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                if(secondary.toLowerCase() === "add") {
                    addNote({...note, image: downloadURL});
                    getNotes(reduxDispatch);
                }
                if(secondary.toLowerCase() === "update") {
                    updateNote(id, {...note, image: downloadURL}, reduxDispatch);
                    getNotes(reduxDispatch);
                }
            });
        }
    );
    return image;
};

export { addNote, getNotes, getNote, updateNote, deleteNote, uploadImage };
