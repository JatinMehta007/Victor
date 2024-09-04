import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

export const Signin =()=>{
    return  <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* by using grid this will take 50% of the width */}
        <div>
        <Auth type="signin"/>
        </div>
        <div className="hidden lg:block">

        <Quote/>    
        </div>
        </div>
    </div>
}