import styled from "styled-components";

export const Header = styled.header`
background-color: #054A91;
color: #ffffff;
min-width:420px;
padding-block:15px;
font-size: 20px;
font-weight: bold;
display: flex;
align-items: center;
justify-content: center;
@media (max-width: 420px) {
    padding-left : 20px;
    justify-content:flex-start;
}
`;

export const Section = styled.section`
background-color: #dddddf;
min-width: 420px;
height: calc(100vh - 60px);
display: flex;
justify-content: center;
`;

export const Container = styled.div`
width:600px;
margin-bottom: 12px;
display: flex;
flex-direction:column;
align-items: center;
`;

export const Alert = styled.div`
width: min(500px,100%);
min-height: 40px;
margin-block: 10px;
padding: 10px;
`;

export const Message = styled.div`
background-color:${({ alertType }) => (alertType === "success" ? "#248a2a" : alertType === "danger" ? "#a10505" : alertType === "info" ? "#017281" : "")};
color: #ffffff;
padding-block: 1px;
text-align: center;
letter-spacing: 2px;
border-radius:5px;
`;

export const InputContainer = styled.div`
background-color: #faf6f6;
width:90%;
margin-bottom: 30px;
padding: 20px;
border-radius:  5px ;
box-shadow: 1px 1px 6px 1px #1e1b18;
display: flex;
`;

export const Input = styled.input`
background-color: #d8d4d5;
width: min(370px,80%);
margin-right: 15px;
padding: 10px;
font-size: 16px;
font-weight: 600;
border: none;
border-radius: 5px;
outline: none;
&:focus{
    box-shadow: 1px 1px 4px 4px #aaaaaa;
}
`;

export const Button = styled.button`
background-color: ${(props) => (props.isEditing ? "#00457a" : "#146919")};
color:#fff;
padding: 12px;
font-size: 16px;
font-weight: 600;
white-space: nowrap;
border: none;
border-radius: 5px;
display: flex;
align-items: center;
cursor: pointer;
&:hover{
    background-color: ${(props) => (props.isEditing ? "#004e99" : "#148a19")};
    box-shadow: 1px 1px 6px 2px #817f75;
}
`;

export const DropdownWrapper = styled.div`
position: relative;
display: inline-block;
margin-bottom: 10px;
padding-block: 5px;
`;

export const DropdownButton = styled.button`
color: #3498db;
width:200px;
margin-bottom: 5px;
padding: 10px;
font-size: 16px;
font-weight:bold;
position: absolute;
top: -5px;
left: -80px;
border: none;
outline: 2px solid #3498db;
cursor: pointer;
&:hover{
    background-color: #3498db;
    color: white;
    border: 1px solid white;
}
`;

export const DropdownList = styled.ul`
background-color: #dddddf;
width:200px;
font-weight: 600;
position: absolute;
top: 40px;
left: -80px;
list-style: none;
`;

export const DropdownItem = styled.li`
padding: 10px;
border-bottom: 1px solid #3498db;
cursor: pointer;
&:hover {
    background-color: #f1f1f1;
}
`;

export const ListContainer = styled.div`
background-color: #f2f2f2;
width: 90%;
padding: 30px 15px;
border-radius: 5px;
box-shadow: 1px 1px 4px 1px #1e1b18;
overflow-y: auto;
text-align: center;
`;

export const Item = styled.div`
background-color: ${(props) => (props.completed ? "#777777c5" : "#f0f7f4")};
margin-bottom: 12px;
padding: 5px 10px;
border-radius: 10px;
box-shadow: 1px 1px 6px 1px #1e1b18;
overflow-x: auto;
display: flex;
justify-content: space-between;
align-items: center;
&:hover{
    background-color:${(props) => (props.completed ? "" : "#d1d1d1")} ;
}
`;

export const FoodName = styled.span`
font-weight: bold;
text-transform: uppercase;
`;

export const EditMsg = styled.div`
color:${({ completed }) => (completed ? "#148a19" : "")};
margin-top: 10px;
font-size: ${({ completed }) => (completed ? "14px" : "10px")};
font-weight: bolder;
font-style: italic;
letter-spacing: 1px;
`;

export const ListAction = styled.div`
display: grid;
grid-template-columns: repeat(2,30px);
grid-template-rows: repeat(2,25px);
justify-items: end;
align-items: center;
gap: 3px;
`;

export const CheckBox = styled.input`
width: 18px;
height: 18px;
margin-right: 8px;
`;

export const EditButton = styled(Button)`
background-color: transparent;
color:#003885;
font-size: 18px;
padding: 5px 8px;
&:hover{
    background-color: transparent ;
    color:#002065;
    font-size: 20px;
    box-shadow: none;
}
`;

export const DeleteButton = styled(EditButton)`
color:#b80f00;
font-size: 16px;
&:hover{
    color: #ff0000;
    font-size: 18px;
}
`;

export const ClearListButton = styled(DeleteButton)`
margin-top: 15px;
text-align: center;
&:hover{
    color: #fe3030;
    font-size: 16px;
}
`;

export const Time = styled.span`
grid-column:1 / span 3;
font-size: 12px;
font-weight: bold;
`;
