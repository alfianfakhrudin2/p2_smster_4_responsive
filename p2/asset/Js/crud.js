// Nempel
window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


// loading bar animated
// const element = document.getElementById('timer');
// const anStarted = Date.now();
// const a = 100;
// const max = 1180;
// function initTimer() {
//     let transformOffset = 0;
//     let rafId = 0;
//     let initial = 0;

//         const animate = function() {
//         transformOffset = Math.floor((Date.now() - anStarted) / max) * -1;
//         element.style.transform = `translateX(${transformOffset}%)`;
//         };

//         const run = timestamp => {
//         if (!initial || timestamp - initial >= max) {
//             initial = timestamp;
//             animate();
//         }

//         rafId = requestAnimationFrame(run);

//         if (Math.abs(transformOffset) >= a) {
//             cancelAnimationFrame(rafId);
//             rafId = 0;
//         }
//     };

//     run();
// }
// initTimer();

// open-modal and control logic
var registerForm = document.querySelector("#register-form");
var allInput = registerForm.querySelectorAll("INPUT");
var addMybtn = document.querySelector("#add-new");
var modal = document.querySelector(".modal");
var closeMybtn = document.querySelector(".tombol-close-modal");
addMybtn.onclick = function(){
    // alert(); for testing
    modal.classList.add("active");
}
closeMybtn.addEventListener("click",()=>{
    modal.classList.remove("active");
    var i;
    for(i=0;i<allInput.length;i++){
        allInput[i].value = "";
    }
})

// ==================================================== Global Variable ======================================================== //

var userData = [];

// global data image
var profile_pic = document.querySelector("#profile-pic");
var uploadPic = document.querySelector("#upload-field");

// global data input
var hnameEl = document.querySelector("#hname");
var hcostEl = document.querySelector("#hcost");
var hroleEl = document.querySelector("#hrole");
var hspecEl = document.querySelector("#hspec");
var hlaneEl = document.querySelector("#hlane");
var hbuildEl = document.querySelector("#hbuild");
var hpassiveEl = document.querySelector("#hpassive");
var hskill1El = document.querySelector("#hskill1");
var hskill2El = document.querySelector("#hskill2");
var hskill3El = document.querySelector("#hskill3");
var hskill4El = document.querySelector("#hskill4");
var htipsEl = document.querySelector("#htips");

// global data button
var registerBtn = document.querySelector("#register-btn");
var updateBtn = document.querySelector("#update-btn");
var registerForm = document.querySelector("#register-form");

var imgUrl;

// ==================================================== End Global Variable ==================================================== //

// Data Input Logic
// ini yang bener seharusnya
// registerForm.onsubmit = function(e){
// ini yang alternatif
registerBtn.onclick = function(e){
    e.preventDefault();
    registrationData();
    getDataFromLocal();
    registerForm.reset('');
    closeMybtn.click();
}

if(localStorage.getItem("userData") != null){
    userData = JSON.parse(localStorage.getItem("userData"));
    // console.log(userData);
};

function registrationData(){
    userData.push({
        hname : hnameEl.value,
        hcost : hcostEl.value,
        hrole : hroleEl.value,
        hspec : hspecEl.value,
        hlane : hlaneEl.value,
        hbuild : hbuildEl.value,
        hpassive : hpassiveEl.value,
        hskill1 : hskill1El.value,
        hskill2 : hskill2El.value,
        hskill3 : hskill3El.value,
        hskill4 : hskill4El.value,
        htips : htipsEl.value,
        profilePic : imgUrl == undefined ? "https://cdn.iconscout.com/icon/free/png-256/free-add-plus-3114469-2598247.png" : imgUrl
    })
    var userString = JSON.stringify(userData);
    localStorage.setItem("userData",userString);
    swal({
        title: "Success!",
        text: "Data has been entered into Storage!",
        icon: "success",
    });
}

// Data Return Logic
var tableData = document.querySelector("#table-data");
const getDataFromLocal = () =>{
    tableData.innerHTML = "";
    userData.forEach((data,index)=>{

        // data table dalam bentuk html
        tableData.innerHTML += `
            <tr index='${index}'>
                <td>${index+1}</td>
                <td class="tombol-action">
                    <button class="tombol-icon icedit"><i class="fa fa-pen-alt"></i></button>
                    <button class="tombol-icon icdelete"><i class="fa fa-trash-alt"></i></button>
                </td>
                <td><img class="hero-icon-fix" src="${data.profilePic}" width="50px" height="50px"/></td>
                <td>${data.hname}</td>
                <td>${data.hcost}</td>
                <td>${data.hrole}</td>
                <td>${data.hspec}</td>
                <td>${data.hlane}</td>
                <td>${data.hbuild}</td>
                <td>${data.hpassive}</td>
                <td>${data.hskill1}</td>
                <td>${data.hskill2}</td>
                <td>${data.hskill3}</td>
                <td>${data.hskill4}</td>
                <td>${data.htips}</td>
            </tr>
        `;
    })


    // Data Delete Logic
    var i;
    var allDelBtn = document.querySelectorAll(".icdelete");
    for(i=0;i<allDelBtn.length;i++){
        allDelBtn[i].onclick = function(){
            var tr = this.parentElement.parentElement;
            var hname = tr.getAttribute("index");

            // Animasi Modal
            swal({
                title: "Are you sure you want to delete it?",
                text: "If it has already been deleted, it can't be recovered anymore, this data!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
                closeOnClickOutside: false,
                closeOnEsc: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                    // ini 3 line beneran untuk logic hapus nyaa
                    userData.splice(hname,1);
                    localStorage.setItem("userData",JSON.stringify(userData));
                    tr.remove();
                    // =========================================
                  swal("Poof! data has been deleted!", {
                    icon: "success",
                  });
                } else {
                  swal("The data wasn't deleted, it's safe!");
                }
              });
        }
    }


    // Data Update Logic
    var allEdit = document.querySelectorAll(".icedit");
    for(i=0;i<allEdit.length;i++){
        allEdit[i].onclick = function(){
            var tr = this.parentElement.parentElement;
            var td = tr.getElementsByTagName("TD");
            var index = tr.getAttribute("index");
            var imgTag = td[2].getElementsByTagName("IMG");
            var profilePic = imgTag[0].src;
            var hname = td[3].innerHTML;
            var hcost = td[4].innerHTML;
            var hrole = td[5].innerHTML;
            var hspec = td[6].innerHTML;
            var hlane = td[7].innerHTML;
            var hbuild = td[8].innerHTML;
            var hpassive = td[9].innerHTML;
            var hskill1 = td[10].innerHTML;
            var hskill2 = td[11].innerHTML;
            var hskill3 = td[12].innerHTML;
            var hskill4 = td[13].innerHTML;
            var htips = td[14].innerHTML;
            addMybtn.click();
            registerBtn.disabled = true;
            updateBtn.disabled = false;
            hnameEl.value = hname;
            hcostEl.value = hcost;
            hroleEl.value = hrole;
            hspecEl.value = hspec;
            hlaneEl.value = hlane;
            hbuildEl.value = hbuild;
            hpassiveEl.value = hpassive;
            hskill1El.value = hskill1;
            hskill2El.value = hskill2;
            hskill3El.value = hskill3;
            hskill4El.value = hskill4;
            htipsEl.value = htips;
            profile_pic.src = profilePic;
            updateBtn.onclick = function(e){
                userData[index] = {
                    hname : hnameEl.value,
                    hcost : hcostEl.value,
                    hrole : hroleEl.value,
                    hspec : hspecEl.value,
                    hlane : hlaneEl.value,
                    hbuild : hbuildEl.value,
                    hpassive : hpassiveEl.value,
                    hskill1 : hskill1El.value,
                    hskill2 : hskill2El.value,
                    hskill3 : hskill3El.value,
                    hskill4 : hskill4El.value,
                    htips : htipsEl.value,
                    profilePic : uploadPic.value == "" ? profile_pic.src : imgUrl
                }
                localStorage.setItem("userData",JSON.stringify(userData));
            }
        }
    }


}
getDataFromLocal();


// image processing data

uploadPic.onchange = function(){
    if(uploadPic.files[0].size < 2000000){
        var fReader = new FileReader();
        fReader.onload = function(e){
            imgUrl = e.target.result;
            profile_pic.src = imgUrl;
            console.log(imgUrl);
        }
        fReader.readAsDataURL(uploadPic.files[0]);
    }else{
        alert("File Is TOO BIG!! Max 20MB");
    }
}


// searchbar logic
var searchEl = document.querySelector("#searchme");
searchEl.oninput = function(){
    searchFunc();
}
function searchFunc(){
    var tr = tableData.querySelectorAll("TR");
    var filter = searchEl.value.toLowerCase();
    var i;
    for(i=0;i<tr.length;i++){
        var hname = tr[i].getElementsByTagName("TD")[3].innerHTML;
        var hcost = tr[i].getElementsByTagName("TD")[4].innerHTML;
        var hrole = tr[i].getElementsByTagName("TD")[5].innerHTML;
        var hspec = tr[i].getElementsByTagName("TD")[6].innerHTML;
        var hlane = tr[i].getElementsByTagName("TD")[7].innerHTML;
        if(hname.toLocaleLowerCase().indexOf(filter) > -1){
            tr[i].style.display = "";
        }
        else if(hcost.toLocaleLowerCase().indexOf(filter) > -1){
            tr[i].style.display = "";
        }
        else if(hrole.toLocaleLowerCase().indexOf(filter) > -1){
            tr[i].style.display = "";
        }
        else if(hspec.toLocaleLowerCase().indexOf(filter) > -1){
            tr[i].style.display = "";
        }
        else if(hlane.toLocaleLowerCase().indexOf(filter) > -1){
            tr[i].style.display = "";
        }
        else{
            tr[i].style.display = "none";
        }
    }
}



// Delete All Logic
var delAllBtn = document.querySelector("#del-all-btn");
var delAllBox = document.querySelector("#del-all-box");
delAllBtn.addEventListener('click',()=>{
    if(delAllBox.checked == true){
        swal({
            title: "Are you sure you want to delete it?",
            text: "If it has already been deleted, it can't be recovered anymore, this data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            closeOnClickOutside: false,
            closeOnEsc: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    localStorage.removeItem("userData");
                    window.location = location.href;
                swal("Poof! data has been deleted!", {
                    icon: "success",
                });
                } else {
                swal("The data wasn't deleted, it's safe!");
                }
            });
    }
    else{
        swal({
            title: "Delete All",
            text: "You just pressed the Delete All button, make sure the secured button is pressed too!",
            icon: "warning",
            closeOnClickOutside: true,
            closeOnEsc: true,
        });
    }
})


// modal logout
$('.buka-modal').click(function(){
    $('.js-logout-modal').toggleClass('modalnya-ada').toggleClass('modalnya-gada');
});
$('.tutup-modal').click(function(){
    $('.js-logout-modal').toggleClass('modalnya-ada').toggleClass('modalnya-gada');
});





