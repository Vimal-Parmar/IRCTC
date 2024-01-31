import { useState, useEffect } from "react";
import BookListCard from "./BookListCard";
import { useParams } from "react-router-dom";
import { auth, db } from "../firebase-config";
import { updateDoc, doc, collection, getDocs } from "firebase/firestore";

export default function BookList() {
  const { id } = useParams();
  const [formData, setFormData] = useState({});
  const usersCollectionRef = collection(db, "Users");

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await getDocs(usersCollectionRef);
        response.forEach((doc) => {
          const userData = doc.data();
         
          if (userData.uid === id) {
            setFormData({ ...formData, ...userData, id: doc.id });
            
          }
        });
  
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };
  
    getUsers();
  
  }, []);

 console.log(formData);

  
  return <div>hi</div>;
}
