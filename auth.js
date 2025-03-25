// ป้องกันการเข้า main.html โดยตรง
if (window.location.pathname.endsWith("main.html") && localStorage.getItem("authenticated") !== "true") {
    window.location.href = "index.html"; // ส่งกลับไปหน้าล็อกอิน
}
