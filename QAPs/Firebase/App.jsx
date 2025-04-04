import { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editingUser, setEditingUser] = useState(null); // Track user being edited

  // Fetch users from Firestore
  const fetchUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const usersList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setUsers(usersList);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Function to add or update a user
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingUser) {
      // Update existing user
      const userDoc = doc(db, "users", editingUser.id);
      await updateDoc(userDoc, { name, email });
      console.log("User updated:", editingUser.id);
      setEditingUser(null);
    } else {
      // Add a new user
      await addDoc(collection(db, "users"), { name, email });
      console.log("New user added!");
    }

    setName("");
    setEmail("");
    fetchUsers();
  };

  // Function to delete a user
  const deleteUser = async (id) => {
    await deleteDoc(doc(db, "users", id));
    console.log("User deleted:", id);
    fetchUsers();
  };

  // Function to populate form for editing
  const handleEdit = (user) => {
    setEditingUser(user);
    setName(user.name);
    setEmail(user.email);
  };

  return (
    <div>
      <h2>{editingUser ? "Edit User" : "Add User"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">
          {editingUser ? "Update User" : "Add User"}
        </button>
        {editingUser && (
          <button onClick={() => setEditingUser(null)}>Cancel</button>
        )}
      </form>

      <h3>Users List</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
