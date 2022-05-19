export default function Account(){
    return(
        <div className="flex flex-row items-center px-3 w-full">
            <img src="https://cdn-icons.flaticon.com/png/512/1144/premium/1144760.png?token=exp=1652929746~hmac=5e41840e612338ba96c82d7b49080447" className="w-1/12 mr-4" />

            <div>
                <p className="text-xl">
                    What's Happening?
                </p>
                <p className="text-sm text-blue-600  text-semibold hove:text-xl">
                    Everyone can reply
                </p>

                <div>
                    <ul>
                        <li>
                            
                        </li>
                    </ul>
                    <p className="ml-auto bg-[#1d9bf0]/30 py-1 text-center w-1/2 rounded-full">Tweet</p>
                </div>   
                
            </div>
        </div>
    )
}