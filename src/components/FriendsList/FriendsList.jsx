import PropTypes from "prop-types";
import { Conteiner, Item, Status, Avatar,Name } from "./FriendsList.styled";
export const FriendsList = ({friends }) => {
    return (
        <Conteiner>
            {friends.map(({avatar, name,isOnline,id}) => {
                return (
                    <Item key={id}>
                        <Status isOnline={isOnline}></Status>
                        <Avatar alt="User avatar" src={avatar} />
                        <Name>{name}</Name>
                    </Item>
                )
            })}
        </Conteiner>
    )
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number
  })
}