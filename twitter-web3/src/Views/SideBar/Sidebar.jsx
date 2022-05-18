export default function Sidebar(){
    return(
        <div className="w-full">
            <ul className="mx-auto w-1/3 space-y-4 text-xl">
                <li>
                    <img className="w-1/4 " src="https://cdn-icons-png.flaticon.com/512/2111/2111738.png" alt="twitter icon"/>
                    
                </li>
                <li className="flex flex-row items-center">
                    <img className="w-1/4 mr-8" src="https://cdn-icons-png.flaticon.com/512/17/17041.png" />
                    <p>Home</p>
                </li>
                <li className="flex flex-row items-center">
                    <img className="w-1/4 mr-8 " src="https://cdn-icons-png.flaticon.com/512/1/1533.png" />
                    <p>Explore</p>
                </li>
                <li className="flex flex-row items-center">
                    <img className="w-1/4 mr-8 " src="https://cdn-icons-png.flaticon.com/512/3602/3602123.png" />
                    <p>Notifications</p>
                </li>
                <li className="flex flex-row items-center">
                    <img className="w-1/4 mr-8 " src="https://cdn-icons.flaticon.com/png/512/542/premium/542689.png?token=exp=1652899523~hmac=1172c764e1ca735745a6aab514c8ea84" />
                    <p>Messages</p>
                </li>
                <li className="flex flex-row items-center">
                    <img className="w-1/4 mr-8 " src="https://cdn-icons-png.flaticon.com/512/25/25667.png" />
                    <p>Bookmarks</p>
                </li>
                <li className="flex flex-row items-center">
                    <img className="w-1/4 mr-8 "  src="https://cdn-icons-png.flaticon.com/512/2089/2089500.png" />
                    <p>Top Articles</p>
                </li>
                <li className="flex flex-row items-center">
                    <img className="w-1/4 mr-8 " src="https://cdn-icons-png.flaticon.com/512/7508/7508497.png" />
                    <p>Profile</p>
                </li>
                <p className="bg-[#1d9bf0] w-full text-center p-3 rounded-full">
                Tweet
                </p>
            </ul>
        </div>
    )
}