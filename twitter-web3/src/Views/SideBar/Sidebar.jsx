export default function Sidebar(){
    return(
        <div className="w-auto">
            <ul className="mr-auto ml-8 w-8/12 space-y-4 text-xl">
                <li>
                    <img className="w-1/4 ml-auto xl:mr-8 xl:ml-none" src="https://www.apacph.org/wp/wp-content/uploads/2014/03/Twitter-Logo-New-.png" alt="twitter icon"/>
                    
                </li>
                <li className="flex flex-row items-center">
                    <img className="w-1/4 ml-auto xl:mr-8" src="https://cdn-icons-png.flaticon.com/512/17/17041.png" />
                    <p className="hidden xl:block">Home</p>
                </li>
                <li className="flex flex-row items-center">
                    <img className="w-1/4 ml-auto xl:mr-8 " src="https://cdn-icons-png.flaticon.com/512/1/1533.png" />
                    <p className="hidden xl:block">Explore</p>
                </li>
                <li className="flex flex-row items-center">
                    <img className="w-1/4 ml-auto xl:mr-8 " src="https://cdn-icons-png.flaticon.com/512/3602/3602123.png" />
                    <p className="hidden xl:block">Notifications</p>
                </li>
                <li className="flex flex-row items-center">
                    <img className="w-1/4 ml-auto xl:mr-8 " src="https://cdn-icons.flaticon.com/png/512/542/premium/542638.png?token=exp=1652938762~hmac=72958f9de256bbfbd4d1f5b866227515" />
                    <p className="hidden xl:block">Messages</p>
                </li>
                <li className="flex flex-row items-center">
                    <img className="w-1/4 ml-auto xl:mr-8 " src="https://cdn-icons-png.flaticon.com/512/25/25667.png" />
                    <p className="hidden xl:block">Bookmarks</p>
                </li>
                <li className="flex flex-row items-center">
                    <img className="w-1/4 ml-auto xl:mr-8 "  src="https://cdn-icons-png.flaticon.com/512/2089/2089500.png" />
                    <p className="hidden xl:block">Top Articles</p>
                </li>
                <li className="flex flex-row items-center">
                    <img className="w-1/4 ml-auto xl:mr-8 " src="https://cdn-icons-png.flaticon.com/512/7508/7508497.png" />
                    <p className="hidden xl:block">Profile</p>
                </li>
                <p className="bg-[#1d9bf0] w-1/2 text-center ml-auto ">
                    Tweet
                </p>
            </ul>
        </div>
    )
}