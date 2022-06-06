import Data from "./Data";
import Feed from "./Feed";

import PrimarySearchAppBar from "./Search";

const Home = () => {
    return (
    <div>
    <PrimarySearchAppBar sx={{ flexGrow: 1 }}></PrimarySearchAppBar>
    <Feed></Feed> 
    </div>
    );
    }
export default Home;