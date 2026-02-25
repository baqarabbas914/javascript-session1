// JSONPlaceholder API endpoint
const API_URL = 'https://jsonplaceholder.typicode.com/users';

// State
let isEditing = false;
// keep a local copy of users so we can update the UI when the fake API won't persist changes
let usersCache = [];

// ==================== READ: Get all users ====================

async function fetchUsers() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const users = await response.json();
        console.log("Fetched users:", users);
        usersCache = users;
        displayUsers(usersCache);

    } catch(error) {
        console.error("Error fetching users: ", error);
        document.getElementById("usersList").innerHTML =
        '<p class="empty-state">Error loading users. Please try again.</p>'
    }

}

// Display users in the grid

function displayUsers(users) {
    const usersList = document.getElementById("usersList");

    if(!users || users.length === 0) {
        usersList.innerHTML = 
        '<p class="empty-state">No users found. Add your first user!</p>'
        return;
    }

    usersList.innerHTML = users.map((user) => `
       <div class="user-card" data-id="${user.id}">
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Phone:</strong> ${user.phone || "N/A"}</p>
          <p><strong>Website:</strong> ${user.website || "N/A"}</p>
          <div class="user-actions">
                <button onclick="editUser('${user.id}')" class="btn btn-edit">Edit</button>
                <button onclick="deleteUser('${user.id}')" class="btn btn-delete">Delete</button>
            </div>
       </div>
    `).join("");
}

// ==================== CREATE: Add new user ====================

document.getElementById("userForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        website: document.getElementById("website").value,
    };

    try {
        let response;

        if (isEditing) {
            // ==================== UPDATE: Edit existing user ====================
            const userIdInput = document.getElementById("userId");
            const userId = userIdInput ? userIdInput.value : null;

            if (!userId) {
                throw new Error('Missing user ID for update');
            }

            response = await fetch(`${API_URL}/${userId}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...userData,
                    id: userId,
                }),
            });
        }
         else {
            // ==================== CREATE: Add new user ====================
            response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            })


         }

         if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
         }

         const result = await response.json();
         console.log("Success:", result);

         // Show success message 
         alert(
            isEditing ? "User updated successfully!" : "User created successfully"
         );

         // reset form
         resetForm();

         // update local cache & UI rather than relying on JSONPlaceholder persistence
         if (isEditing) {
             usersCache = usersCache.map(u => u.id == result.id ? result : u);
         } else {
             usersCache.push(result);
         }
         displayUsers(usersCache);
    } catch (error) {
        console.error("Error savng user:", error);
        alert("Error saving user. Please try again.");
    }
})

// ==================== UPDATE: Get single user for editing ====================

window.editUser = async function (id) {
     try {
    // Fetch the specific user
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const user = await response.json();

    // Populate the form
    isEditing = true;
    document.getElementById("userId").value = user.id;
    document.getElementById("name").value = user.name;
    document.getElementById("email").value = user.email;
    document.getElementById("phone").value = user.phone || "";
    document.getElementById("website").value = user.website || "";

    // Update UI for edit mode
    document.getElementById("formTitle").textContent = "Edit User";
    document.getElementById("submitBtn").textContent = "Update User";
    document.getElementById("cancelBtn").style.display = "block";

    // Scroll to form
    document.querySelector(".form-card").scrollIntoView({ behavior: "smooth" });
  } catch (error) {
    console.error("Error fetching user for edit:", error);
    alert("Error loading user data. Please try again.");
  }
}

// ==================== DELETE: Remove user ====================

window.deleteUser = async function (id) {
    if (confirm("Are you sure you want to delete this user?")) {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            console.log("User deleted:", id);
            alert("User deleted successfully!");

            // Remove the user card from the UI immediately for better UX
            const userCard = document.querySelector(`.user-card[data-id="${id}"]`);
            if (userCard) {
                userCard.remove();
            }

             // If no users left, show empty state
      const usersList = document.getElementById("usersList");
      if (usersList.children.length === 0) {
        usersList.innerHTML =
          '<p class="empty-state">No users found. Add your first user!</p>';
      }
        } catch (error) {
            console.error("Error deleting user:", error);
      alert("Error deleting user. Please try again.");
      // Refresh the list to ensure UI is in sync
      fetchUsers();
        }
    }
}

// ==================== Cancel editing ====================
window.cancelEdit = function () {
  resetForm();
};

// Reset form to add mode
function resetForm() {
  isEditing = false;
  document.getElementById("userForm").reset();
  document.getElementById("userId").value = "";
  document.getElementById("formTitle").textContent = "Add New User";
  document.getElementById("submitBtn").textContent = "Add User";
  document.getElementById("cancelBtn").style.display = "none";
}

// Initialize the app
fetchUsers();

// Bonus: Test the different endpoints
console.log("📚 JSONPlaceholder Endpoints:");
console.log("GET    /users      - Get all users");
console.log("GET    /users/1    - Get user with id 1");
console.log("POST   /users      - Create new user");
console.log("PUT    /users/1    - Update user with id 1");
console.log("PATCH  /users/1    - Partially update user");
console.log("DELETE /users/1    - Delete user with id 1");