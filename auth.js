/*************************************************
 * AUTHENTICATION SYSTEM
 *************************************************/

function getCurrentUser() {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    const username = sessionStorage.getItem("username");
    const department = sessionStorage.getItem("department");
    const role = sessionStorage.getItem("role");

    if (isLoggedIn !== "true" || !username || !department || !role) {
        return null;
    }

    return {
        isLoggedIn: true,
        username: username,
        department: department,
        role: role
    };
}

function checkLogin() {
    const user = getCurrentUser();

    if (!user) {
        window.location.href = "index.html";
        return false;
    }

    if (user.role === "admin") {
        window.location.href = "dashboard.html";
        return false;
    }

    if (user.role !== "employee") {
        window.location.href = "index.html";
        return false;
    }

    return true;
}

function checkAdmin() {
    const user = getCurrentUser();

    if (!user) {
        window.location.href = "index.html";
        return false;
    }

    if (user.role !== "admin") {
        alert("คุณไม่มีสิทธิ์เข้าถึงหน้า Admin Dashboard");
        window.location.href = "report.html";
        return false;
    }

    return true;
}

function isAdmin() {
    const user = getCurrentUser();
    return !!user && user.role === "admin";
}

function isEmployee() {
    const user = getCurrentUser();
    return !!user && user.role === "employee";
}

function logout() {
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("department");
    sessionStorage.removeItem("role");

    window.location.href = "index.html";
}
