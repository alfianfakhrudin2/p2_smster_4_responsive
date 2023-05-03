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

function validasi(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if( username == "alfin" && password == "addmin123"){
        const Toast = Swal.mixin({
                        toast: true,
                        position: 'top',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                        })
                        
                        Toast.fire({
                            icon: 'success',
                            title: 'Log in successfully'
                        }).then(function() {
                        window.location = "Dashboard.html"; // Redirecting to other page.
                    });
        window.location = "../Admin/Dashboard.html"
    } else {
        const Toast = Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            
            Toast.fire({
                icon: 'error',
                title: 'Log in Failed'
            })
        return
    }
}