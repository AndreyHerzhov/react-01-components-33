import {  
    MenuContainer,
    Avatar, 
    Username, 
    PointsLabel,
    Points,
    PointsPopover
    } from "./UserMenu.styled"
import { FaUserCircle } from 'react-icons/fa'
 
import { useState } from "react"

export const UserMenu = ({ user }) => {
    const [isPopoverVisible, setIsPopoverVisible] = useState(false); 
    return (
        <MenuContainer 
                onMouseEnter={() => setIsPopoverVisible(true)}
                onMouseLeave={() => setIsPopoverVisible(false)}
        >
            <Avatar isOnline={user.isOnline}>
                <FaUserCircle size={20}/>
            </Avatar>
            <Username>{user.username}</Username>
            {isPopoverVisible && (<PointsPopover>
                <PointsLabel>Текущее количество очков</PointsLabel>
                <Points variant="total">{user.points.total}{' '}</Points>
                <PointsLabel>Необходимое количество очков для следующего уровня</PointsLabel>
                <Points variant="required">{user.points.required}</Points>
            </PointsPopover>)}
            
        </MenuContainer>
    )
}