import firebase from './firebase'
import {useEffect,useRef} from 'react'

const PhoneAuth = () => {
   
    return ( 
        <div id="recaptcha" style={{border:'solid',padding:'4px',margin:'10px'}}>
        <button onClick={()=>{
            let recaptcha=new firebase.auth.RecaptchaVerifier("recaptcha")
            let number=''
            firebase
            .auth()
            .signInWithPhoneNumber(number,recaptcha)
            .then((e)=>{
                let code=prompt("Enter OTP")
                if(code===null){
                    return
                }
                e.confirm(code).then((res)=>{
                        console.log(res.user,"....")
                })
            }).catch((err)=>{
                console.log(err)
            })
        }}>Click Me</button>
        </div> );
}
 
export default PhoneAuth