import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar"
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import  Style from './Style.css'
function App() {
  return (
    <Box  margin={0} >
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="center">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
