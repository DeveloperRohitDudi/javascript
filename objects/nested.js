let allData = {
    companyName: "Google",
    companyEmail: "google@google.com",
    employeeData: {
        employee1: {
            fullName: "frodo",
            email: "frodo@google.com"
        },
        employee2: {
            fullName: "aragorn",
            email: "aragorn@google.com"
        }
    }
}
console.log(allData.companyName);
console.log(allData.employeeData.employee1.fullName);
console.log(allData.employeeData.employee1.email);
