import "./index.css";
import React from "react";
import { Header, Section } from "./Styled-Components/Styles";
import MainContainer from "./Components/MainContainer";
import { LuChefHat } from "react-icons/lu";

function App() {
    return (
        <div>
            <Header>
                <LuChefHat style={{ color: "yellow", marginRight: "10px", fontSize: "30px" }} />
                Food Cook Planning
            </Header>
            <Section>
                <MainContainer />
            </Section>
        </div>
    );
}

export default App;
