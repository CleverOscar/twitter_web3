import Sidebar from "./Views/SideBar/Sidebar";
import NewsFeed from "./Views/Feed/NewsFeed";
import Widgets from "./Views/Widgets/Widgets";

function App() {
  return (
    <div className="bg-gray-700 min-h-screen flex flex-row justify-between px-10">
        <Sidebar />
        <NewsFeed />
        <Widgets />
    </div>
  );
}

export default App;
