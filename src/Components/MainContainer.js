import React, { useState, useRef, useEffect } from "react";
import { Container, InputContainer, Input, Button, Message, Alert, ClearListButton, ListContainer } from "../Styled-Components/Styles";
import FoodItems from "./FoodItems";
import cookitup from "../assets/download.png";
import { AiOutlinePlus } from "react-icons/ai";
import FoodTime from "./FoodTime";

function MainContainer() {
    const date = new Date();
    const time = date.toLocaleTimeString();
    const [newFood, setNewFood] = useState("");
    const [listOfItems, setListOfItems] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const [alert, setAlert] = useState({ show: false, type: "", msg: "" });
    const focusInput = useRef(null);

    useEffect(() => {
        if (listOfItems.length === 0) {
            setNewFood("");
            setIsEditing(false);
        }
        const hideAlert = setTimeout(() => {
            showAlert();
        }, 1500);
        return () => {
            clearTimeout(hideAlert);
        };
    }, [listOfItems]);

    const foodChangeHandler = (event) => {
        setNewFood(event.target.value);
    };
    const showAlert = (show = false, type = "", msg = "") => {
        setAlert({ show, type, msg });
    };

    const addFoodItems = () => {
        focusInput.current.focus();
        if (newFood && isEditing) {
            setListOfItems(
                listOfItems.map((item) => {
                    if (item.id === editId) {
                        return { ...item, foodName: newFood, edited: "Edited", time: time };
                    }
                    return item;
                })
            );
            setIsEditing(false);
            showAlert(true, "info", "Food item has been edited");
            setNewFood("");
        } else {
            const foodItems = {
                id: listOfItems.length === 0 ? 1 : listOfItems[listOfItems.length - 1].id + 1,
                foodName: newFood,
                time: time,
                edited: "",
                finished: "",
                completed: false,
                disabled: false,
            };
            newFood && setListOfItems((listedItems) => [...listedItems, foodItems]);
            newFood && showAlert(true, "success", "Food item added successfully");
            setNewFood("");
        }
    };

    const editFood = (id) => {
        const specificItem = listOfItems.find((item) => item.id === id);
        setIsEditing(true);
        setEditId(id);
        setNewFood(specificItem.foodName);
        focusInput.current.focus();
    };

    const deleteFood = (id) => {
        setListOfItems(listOfItems.filter((item) => item.id !== id));
        setIsEditing(false);
        setNewFood("");
        showAlert(true, "danger", "Food item was deleted successfully");
    };

    const clearList = () => {
        showAlert(true, "danger", "All items cleared in the list");
        setListOfItems([]);
    };

    const handleCompleted = (event, id) => {
        const specificItem = listOfItems.find((item) => item.id === id);
        if (event.target.checked) {
            setListOfItems(
                listOfItems.map((item) => {
                    if (item.id === specificItem.id) {
                        return { ...item, completed: true, disabled: true, finished: "Finished", time: time };
                    }
                    return item;
                })
            );
        }
    };

    return (
        <Container>
            <Alert>{alert.show && <Message alertType={alert.type}>{alert.msg}</Message>}</Alert>
            <InputContainer>
                <Input type="text" placeholder="Enter the dish name" value={newFood} onChange={foodChangeHandler} ref={focusInput}></Input>
                <Button onClick={() => addFoodItems()} isEditing={isEditing}>
                    {!isEditing && <AiOutlinePlus style={{ marginRight: "8px", fontSize: "20px" }} />}
                    {isEditing ? "Edit food" : "Add food"}
                </Button>
            </InputContainer>
            <FoodTime listOfItems={listOfItems} />
            <ListContainer>
                {listOfItems.length > 0 ? (
                    <>
                        {listOfItems
                            .map((item) => {
                                return <FoodItems key={item.id} item={item} handleCompleted={handleCompleted} editFood={editFood} deleteFood={deleteFood} />;
                            })
                            .sort((a, b) => (a.time > b.time ? 1 : -1))}
                    </>
                ) : (
                    <img src={cookitup} height="180px" />
                )}
            </ListContainer>
            {listOfItems.length > 0 && <ClearListButton onClick={clearList}>Clear List</ClearListButton>}
        </Container>
    );
}

export default MainContainer;
