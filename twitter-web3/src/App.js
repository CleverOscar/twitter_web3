import Sidebar from "./Views/SideBar/Sidebar";
import NewsFeed from "./Views/Feed/NewsFeed";
import Widgets from "./Views/Widgets/Widgets";

function App() {
  return (
    <div className="bg-[#ffffff00] min-h-screen mt-2">
        <div className="flex flex-row w-full mx-auto">
          <Sidebar />
          <NewsFeed />
          <Widgets />
        </div>
    </div>
  );
}

export default App;
