import React from "react";
import PropTypes from 'prop-types';
import { Conteiner, Name, Tag, Location, Avatar, Stats, StatsList, Label, Quantity, Description } from "./Profile.styled";

class Profile extends React.Component{

    render() {
        return(<Conteiner>
             <Description>
                 <Avatar alt='User avatar' src={this.props.avatar} size='100px'></Avatar>
                 <Name>{this.props.userName}</Name>
                 <Tag>@{this.props.tag}</Tag>
                 <Location>{this.props.location}</Location>
             </Description>
             <Stats>
                 <StatsList>
                     <Label>followers</Label>
                     <Quantity>{this.props.stats.followers}</Quantity>
                 </StatsList>
                 <StatsList><Label>views</Label>
                     <Quantity>{this.props.stats.views}</Quantity>
                 </StatsList>
                 <StatsList><Label>likes</Label>
                     <Quantity>{this.props.stats.likes}</Quantity>
                 </StatsList>
             </Stats>
         </Conteiner>)
    }
}
Profile.propTypes = {
    userName: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes:PropTypes.number.isRequired,
    })
}
export default Profile;

// export const Profile = ({ userName, tag, location, avatar, stats }) => {
//     return (
//         <Conteiner>
//             <Description>
//                 <Avatar alt='User avatar' src={avatar} size='100px'></Avatar>
//                 <Name>{userName}</Name>
//                 <Tag>@{tag}</Tag>
//                 <Location>{location}</Location>
//             </Description>
//             <Stats>
//                 <StatsList>
//                     <Label>followers</Label>
//                     <Quantity>{stats.followers}</Quantity>
//                 </StatsList>
//                 <StatsList><Label>views</Label>
//                     <Quantity>{stats.views}</Quantity>
//                 </StatsList>
//                 <StatsList><Label>likes</Label>
//                     <Quantity>{stats.likes}</Quantity>
//                 </StatsList>
//             </Stats>
//         </Conteiner>
//     )
// }