import React from "react";
import { CheckBox, DeleteButton, EditButton, Item, FoodName, ListAction, Time, EditMsg } from "../Styled-Components/Styles";
import { FaEdit, FaTrash } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";

const FoodItems = ({ item, handleCompleted, editFood, deleteFood }) => {
    return (
        <>
            <Item completed={item.completed}>
                <div>
                    <FoodName>
                        <CheckBox type="checkbox" onChange={(event) => handleCompleted(event, item.id)} disabled={item.disabled} />
                        <ImSpoonKnife style={{ color: "#0998ff", marginRight: "5px" }} />
                        {item.foodName}
                    </FoodName>
                    {(item.completed || item.edited) && <EditMsg completed={item.completed}>{item.completed ? item.finished : item.edited}</EditMsg>}
                </div>
                <ListAction>
                    <EditButton onClick={() => editFood(item.id)} disabled={item.disabled}>
                        <FaEdit />
                    </EditButton>
                    <DeleteButton onClick={() => deleteFood(item.id)}>
                        <FaTrash />
                    </DeleteButton>
                    <Time>{item.time}</Time>
                </ListAction>
            </Item>
        </>
    );
};
export default FoodItems;
