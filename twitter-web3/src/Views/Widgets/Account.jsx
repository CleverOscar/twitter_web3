export default function Account(){
    return(
        <div className="flex flex-row items-center px-3 w-full">
            <img src="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg" className="w-1/12 mr-4" />

            <div className=" w-full">
                <p className="text-xl">
                    What's Happening?
                </p>
                <p className="text-sm text-blue-600  text-semibold hove:text-xl">
                    Everyone can reply
                </p>

                <div className="flex flex-row ">
                    <ul className="flex space-x-4 mr-auto ">
                        <li>
                            img
                        </li>
                        <li>
                            gif
                        </li>
                        <li>
                            poll
                        </li>
                        <li>
                            emojis
                        </li>
                        <li>
                            schedule
                        </li>
                    </ul>
                    <p className="bg-[#1d9bf0]/30 p-3 rounded-full">Tweet</p>
                </div>   
                
            </div>
        </div>
    )
}