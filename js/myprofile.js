import {
  getFirestore,
  collection,
  doc,
  getDoc,
  updateDoc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";

//global
const firebaseConfig = {
  apiKey: "AIzaSyD2wZz5FE67IV7278ezzTiQfm0tP8Okmus",
  authDomain: "sportscrush-b20bd.firebaseapp.com",
  projectId: "sportscrush-b20bd",
  storageBucket: "sportscrush-b20bd.appspot.com",
  messagingSenderId: "188829017619",
  appId: "1:188829017619:web:f0bbbe5f64d432a2a3c1e6",
  measurementId: "G-9CS7TKRD9H",
};

const app = initializeApp(firebaseConfig);

// My Query
const db = getFirestore(app);

let user = JSON.parse(localStorage.getItem("user"));
const userCollection = collection(getFirestore(), "users"); // Note: Invoke getFirestore()
const userDocRef = doc(userCollection, user.uid);
<<<<<<< HEAD
=======

>>>>>>> 772692db25c4b931b15d6e6db0cd9a961703baea
getDoc(userDocRef)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      const userData = docSnapshot.data();
      document.getElementById("firstName").value = userData?.firstName;
      document.getElementById("lastName").value = userData?.lastName;
      document.getElementById("gender").value = userData?.gender;
      document.getElementById("dob").value = userData?.dob;
      document.getElementById("phoneNumber").value = userData?.phoneNumber;
      document.getElementById("email").value = userData?.email;
      document.getElementById("address").value = userData?.address;
      document.getElementById("sportsInterest").value = userData?.sports_interest;
    } else {
      console.log("No such Document!");
    }
  })
  .catch((error) => {
    console.log("Error getting document:", error);
  });
window.addEventListener("load", (event) => {
  let username = (document.querySelector(".username").innerHTML = user.email);
  
});

// onload = (event) => {};
document.querySelector("#form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Capture edited data from form fields
  let editedData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    gender: document.getElementById("gender").value,
    dob: document.getElementById("dob").value,
    phoneNumber: document.getElementById("phoneNumber").value,
    email: document.getElementById("email").value,
    address: document.getElementById("address").value,
  };
  //creating data
  setData(editedData);
  // Update user document in Firestore
  updateDoc(userDocRef, editedData)
    .then(() => {
      console.log("Document successfully updated!");
      // You can provide a success message to the user or redirect them to another page
    })
    .catch((error) => {
      console.error("Error updating document: ", error);
      // Handle error scenario
    });
});
const setData = async (data) => {
  try {
    await setDoc(doc(db, "users", user.uid), data);
    console.log("data added successfully");
  } catch (err) {
    console.log(err);
  }
};
//
window.addEventListener("load", (event) => {
  document
    .getElementById("editButton")
    .addEventListener("click", function (event) {
      const fields = document.querySelectorAll(
        'input[type="text"], input[type="date"], input[type="tel"],input[type="email"]'
      );
      const editButton = document.getElementById("editButton");

      if (editButton.textContent === "Edit") {
        // Enable editing
        fields.forEach((field) => {
          field.removeAttribute("readonly");
        });
        editButton.textContent = "Save";
      } else {
        console.log;
        // Save changes
        const editedData = {
          firstName: document.getElementById("firstName").value,
          lastName: document.getElementById("lastName").value,
          gender: document.getElementById("gender").value,
          dob: document.getElementById("dob").value,
          phoneNumber: document.getElementById("phoneNumber").value,
          email: document.getElementById("email").value,
          address: document.getElementById("address").value,
        };
        setData(editedData); // Define this function to update user data
        // Disable editing
        fields.forEach((field) => {
          field.setAttribute("readonly", true);
        });
        editButton.textContent = "Edit";
        console.log(editButton.textContent);
      }
    });
  let username = (document.querySelector(
    ".username"
  ).innerHTML = `<h4>Email Id </h4>${user.email}`);
});
