import axios from "axios";
import Swal from "sweetalert2";
import jwt_decode from "jwt-decode"
import 'bootstrap/dist/css/bootstrap.css'
import dayjs from 'dayjs'

export function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [day, month, year].join('-');
}

export function formatDateSP(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

//format rupiah
export function toCurrency(bilangan, prefix = 'Rp. ') {
    if (bilangan == undefined) {
        return prefix ? prefix + '0' : 0;
    }
    bilangan = bilangan == '.00' ? 0 : bilangan; // respon SP galak string ".00"
    let number_string = bilangan.toString().replace(/[^,\d]/g, ',').toString(),
        split = number_string.split(','),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);
    let separator;
    if (ribuan) {
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    rupiah = (split[1] != undefined && split[1] != '00') ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : (rupiah ? prefix + rupiah : '');
}

//format rupiah
export function toCurrency_noprefix(bilangan) {
    if (bilangan == undefined) {
        return prefix ? prefix + '0' : 0;
    }
    bilangan = bilangan == '.00' ? 0 : bilangan; // respon SP galak string ".00"
    let number_string = bilangan.toString().replace(/[^,\d]/g, ',').toString(),
        split = number_string.split(','),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);
    let separator;
    if (ribuan) {
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    rupiah = (split[1] != undefined && split[1] != '00') ? rupiah + ',' + split[1] : rupiah;

    return (rupiah==','?0:rupiah);
}

export function handleInputNumber(e){
    if (e.charCode >= 48 && e.charCode <= 57 ) {
        return e.target.value
    } else {
        return e.preventDefault();
    }
}

export function inputOnlyNumber(e){
    return e.replace(/[^.\d]/g, '')
}

export async function sendEmail(bodyEmail) {
    try {
        const res = await axios.post("/api/admission/email", bodyEmail)
        const { respon, responCode} = res.data
        if (responCode == 1) {
            Swal.fire({
                title: 'Success',
                text: respon,
                icon: 'success',
            })
        } else {
            Swal.fire({
                title: 'Warning',
                text: respon,
                icon: 'warning',
            })
        }
    } catch (error) {
        Swal.fire({
            title: 'Error',
            text: "Email Fail to Send",
            icon: 'error',
        })
    }

   

}

// export async function checkExpiredToken() {

//     var jwt=JSON.parse(localStorage.getItem('jwt'));
//     var setExp=jwt.exp;

//     var currentdate = new Date(); 
//     var setNow = currentdate.getDate() + "-"
//                     + (currentdate.getMonth()+1)  + "-" 
//                     + currentdate.getFullYear() + " "  
//                     + currentdate.getHours() + ":"  
//                     + currentdate.getMinutes() + ":" 
//                     + currentdate.getSeconds();

//     // console.log(setExp);
//     // console.log(setNow);
//     // console.log(setNow<setExp);

//     if(setNow<setExp){

//         console.log('false');
//         return false;

//     }else{
        
//         axios.post('/api/login/refreshToken',null,
//         {
//             headers: { 
//                 Authorization:'Bearer '+jwt.refresh_token,
//             },
//         }).then((res) => {
//             console.log(res);

//             const { status, token, refresh_token, message } = res.data

//             console.log(refresh_token);
//             if(status==200){

//                 const decodedJwt= jwt_decode(token)
//                 const expiredToken = new Date(decodedJwt.exp * 1000)
//                 const exp = `${expiredToken.getDate()}-${expiredToken.getMonth()+1}-${expiredToken.getFullYear()} ${expiredToken.getHours()}:${expiredToken.getMinutes()}:${expiredToken.getSeconds()}`
                
//                 const jwt = {
//                     token,
//                     refresh_token,
//                     exp
//                 }  
//                 console.log(jwt);
    
//                 localStorage.setItem('jwt', JSON.stringify(jwt))
//             } 
        
  
//         //    localStorage.setItem('jwt',);
            
//         }).catch((error)=>{
//             console.log(error);
//         })

//         return true;
//     }

    
// }

// refressToken
export async function refreshToken() {

    const jwt=JSON.parse(localStorage.getItem('jwt')) || '';

    if (jwt) {
        const token = jwt_decode(jwt.token)
        const isExpired = dayjs.unix(token.exp).diff(dayjs()) < 1
    
        if(isExpired) {
            console.log('exp');
            const response = await axios.post('/api/login/refreshToken',null,{
                                headers: { 
                                    Authorization:'Bearer '+jwt.refresh_token,
                                },
                            })
    
            const { status, token, refresh_token } = response.data
    
            if (status === 200) {
    
                const decodedJwt= jwt_decode(token)
                    const expiredToken = new Date(decodedJwt.exp * 1000)
                    const exp = `${expiredToken.getDate()}-${expiredToken.getMonth()+1}-${expiredToken.getFullYear()} ${expiredToken.getHours()}:${expiredToken.getMinutes()}:${expiredToken.getSeconds()}`
                    
                    const jwt = {
                        token,
                        refresh_token,
                        exp
                    } 
    
                    localStorage.setItem('jwt', JSON.stringify(jwt))
    
            }            
                
        }
        
    }

    return false
}

export function axiosInterceptors() { 
    axios.interceptors.request.use(
        function (config) {
            
            let jwt=JSON.parse(localStorage.getItem('jwt')) || '';
            let language= localStorage.getItem('locale') || ''
            let locationSchool= JSON.parse(localStorage.getItem('locationSchool')) || '';
            
            config.headers.Testauthorization      =  `Bearer ${jwt.token}`;
            config.headers.Testlanguage           =  language;
            config.headers.Testschoollocationcode =  locationSchool.schoolLocationCode;            

            return config;

        }
    )

}

export function show_modal(idmodal){
    let myModalEl = document.getElementById(idmodal)
    let modal = new bootstrap.Modal(myModalEl)
    modal.show()
}

export function hide_modal(idmodal){
    let myModalEl = document.getElementById(idmodal)
    let modal = bootstrap.Modal.getInstance(myModalEl)
    modal.hide()
}