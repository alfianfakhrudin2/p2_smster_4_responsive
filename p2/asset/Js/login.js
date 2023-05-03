// $("#login").validate(){
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     if ( username == "Formget@gmail.com" && password == "123"){
        
//         const Toast = Swal.mixin({
//             toast: true,
//             position: 'top',
//             showConfirmButton: false,
//             timer: 3000,
//             timerProgressBar: true,
//             didOpen: (toast) => {
//                 toast.addEventListener('mouseenter', Swal.stopTimer)
//                 toast.addEventListener('mouseleave', Swal.resumeTimer)
//                 }
//             })
            
//             Toast.fire({
//                 icon: 'success',
//                 title: 'Log in successfully'
//             }).then(function() {
//             window.location = "Dashboard.html"; // Redirecting to other page.
//         });
    
//     return false;
//     }else{
//         const Toast = Swal.mixin({
//             toast: true,
//             position: 'top',
//             showConfirmButton: false,
//             timer: 3000,
//             timerProgressBar: true,
//             didOpen: (toast) => {
//             toast.addEventListener('mouseenter', Swal.stopTimer)
//             toast.addEventListener('mouseleave', Swal.resumeTimer)
//             }
//         })
        
//         Toast.fire({
//             icon: 'error',
//             title: 'Log in Failed'
//         })
//     }
// }

function auth(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if( username == "Alfianganteng" && password == "admin123"){
        window.location.assign("../../web/Admin/Dashboard.html");
        alert("Login Successfully");
    } else {
        // Toast.fire({
        //     icon: 'error',
        //     title: 'Log in Failed'
        // })
        alert("Login Invalid");
        return
    }
}