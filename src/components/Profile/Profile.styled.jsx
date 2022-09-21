import styled from '@emotion/styled'

export const Conteiner = styled.div`
 background-color: #ffffff;
    box-shadow: rgb(0 0 0 / 35%) 0px 2px 11px 5px;
    padding-top: 50px;
`
export const Description = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
`
export const Name = styled.p`
font-size: 26px;
    font-weight: bold;
    margin: 15px 0 0 0;
`
export const Tag = styled.p`
 font-size: 18px;
    color: rgb(165, 165, 165);
    margin: 10px 0 0 0;
`
export const Location = styled.p`
font-size: 18px;
    color: rgb(165, 165, 165);
    margin: 10px 0 0 0;
`
export const Avatar = styled.img`
width: ${props => props.size};
border-radius: 50%;
`
export const Stats = styled.ul`
 display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
    margin: 40px 0 0 0;
   
`
export const StatsList = styled.li`
 display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70px;
    background-color: rgba(217, 229, 235, 0.6);
    border-top: 1px solid rgb(165, 165, 165);
    padding: 30px;
    +li {
        border-left: 1px solid rgb(165, 165, 165);
    }
`
export const Label = styled.span`
font-size: 18px;
    color: rgb(165, 165, 165);
`
export const Quantity = styled.span`
font-size: 18px;
    font-weight: bold;
    margin-top: 4px;
`
