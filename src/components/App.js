import React, { useState } from "react";
import { ThemeProvider } from "../context/theme";
import { UserProvider } from "../context/user";
import Header from "./Header";
import Profile from "./Profile";

function App() {
  const [theme, setTheme] = useState("dark")
  return (
    <ThemeProvider>
        <main className={theme}>

{/* wrap components that need access to context data in the provider*/}
<UserProvider>
<Header/>
<Profile />
</UserProvider>

</main>
    </ThemeProvider>
  
  );
}

export default App;
