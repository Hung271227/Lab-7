import { User } from "./user.js";

const users = [
  new User(
    1,
    "Nguyễn Tiến Hùng",
    "hungnguyen@example.com",
    "0987654321",
    "Admin",
  ),
  new User(2, "Nguyễn Văn An", "an.nguyen@example.com", "0912345678", "User"),
  new User(
    3,
    "Trần Thị Minh Anh",
    "minhanh.tran@example.com",
    "0934567890",
    "User",
  ),
  new User(4, "Lê Hoàng Nam", "nam.le@example.com", "0978123456", "Admin"),
  new User(
    5,
    "Phạm Thị Thu Hà",
    "thuha.pham@example.com",
    "0965432187",
    "User",
  ),
  new User(6, "Trần Minh Đức", "duc.tran@example.com", "0909876543", "User"),
];

const userList = document.getElementById("userList");

function renderUsers() {
  userList.innerHTML = "";

  users.forEach((user, index) => {
    userList.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>
                    <select data-id="${user.id}" class="role">
                        <option value="Admin" ${user.role === "Admin" ? "selected" : ""}>Admin</option>
                        <option value="User" ${user.role === "User" ? "selected" : ""}>User</option>
                    </select>
                </td>
                <td>
                  <button class="view" data-id="${user.id}" title="Xem thông tin">
                      <i class="fa-solid fa-eye"></i>
                  </button>
                </td>
            </tr>
        `;
  });
}

// Thay đổi vai trò
userList.addEventListener("change", function (event) {
  if (event.target.classList.contains("role")) {
    const id = Number(event.target.dataset.id);
    const user = users.find((user) => user.id === id);

    if (user) {
      user.role = event.target.value;
    }
  }
});

// Xem thông tin người dùng
userList.addEventListener("click", function (event) {
  const button = event.target.closest(".view");

  if (button) {
    const id = Number(button.dataset.id);
    const user = users.find((user) => user.id === id);

    if (user) {
      alert(
        "ID: " +
          user.id +
          "\nTên: " +
          user.name +
          "\nEmail: " +
          user.email +
          "\nSố điện thoại: " +
          user.phone +
          "\nVai trò: " +
          user.role,
      );
    }
  }
});

renderUsers();
