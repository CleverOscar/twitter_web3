import Sidebar from "./Views/SideBar/Sidebar";
import NewsFeed from "./Views/Feed/NewsFeed";
import Widgets from "./Views/Widgets/Widgets";

function App() {
  return (
    <div className="bg-gray-700 min-h-screen  ">
        <div className="flex flex-row bg-blue-200 w-full xl:w-3/4  justify-around mx-auto">
          <Sidebar className="w-1/3" />
          <NewsFeed className="w-1/3"/>
          <Widgets className="w-1/3"/>
        </div>
    </div>
  );
}

export default App;
