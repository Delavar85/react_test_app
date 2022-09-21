import styled from '@emotion/styled'

export const Conteiner = styled.section`
     margin-top: 40px;
    background-color:  #ffffff;   
`
export const Titel = styled.h2`
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    color: rgb(165, 165, 165);
    padding-top: 20px;
    margin: 0 0 20px 0;
    
`
export const StatList = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
    margin: 0;
`
export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50px;
    padding: 15px;
    border-top: 2px solid rgba(165, 165, 165, 0.4);
    +li{
        border-left: 2px solid rgba(165, 165, 165, 0.4);
    }
    
`
export const Label = styled.span`
  font-size: 18px;
    color: #ffffff;
    
`
export const Percentage = styled.span`
font-size: 18px;
    color: #ffffff;
    margin-top: 8px;
    
`
