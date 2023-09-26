import React, { useState, useEffect } from "react";
import { DropdownWrapper, DropdownButton, DropdownList, DropdownItem } from "../Styled-Components/Styles";

function FoodTime({ listOfItems }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const options = ["Break Fast", "Lunch", "Dinner"];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <>
            <DropdownWrapper>
                <DropdownButton onClick={toggleDropdown}>{selectedOption || "Choose food time"}</DropdownButton>
                {isOpen && (
                    <DropdownList>
                        {options.map((option) => (
                            <DropdownItem key={option} onClick={() => handleOptionClick(option)}>
                                {option}
                            </DropdownItem>
                        ))}
                    </DropdownList>
                )}
            </DropdownWrapper>
        </>
    );
}

export default FoodTime;
