import styled from "styled-components";

export const MenuContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px 16px;
    /* outline: 1px solid orange; */
    background: lightcyan ;
    :hover{
        background-color: orange;
        p{
            color: wheat;
        }
    }
 `

 export const Avatar = styled.div`
    /* width: 32px;
    height: 32px; */
    color: azure;
    background-color: orange;
    border-radius: 50%;
    border: 4px solid ${p => p.isOnline ? 'green' : 'red'};


    > svg {
        display: block;

        width: 45px;
        height: 45px;
 }
 `

 export const Username = styled.p`
    
 `

 export const PointsPopover = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background: lightgray;
    transform: translateX(100%);
    height: 100%;
    padding: 8px;
 `

 export const PointsLabel = styled.p`
    font-size: 10px;
 `

 export const Points = styled.p`
    font-size: 12px;
    font-weight: 700;
    color: ${p => p.variant === "total" ? "orange" : "green"};
 `