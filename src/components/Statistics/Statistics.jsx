import PropTypes from 'prop-types';
import { Conteiner, Titel, StatList, Item, Label, Percentage } from "./Statistics.styled";
export const Statistics = ({ titel, stats }) => {
    function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
    return (
        <Conteiner>
            <Titel>{ titel }</Titel>
            <StatList>
                {stats.map(({ id, label, percentage }) =>
                    <Item key={id} style={{ backgroundColor: getRandomHexColor() }}>
                    <Label>{label}</Label>
                        <Percentage>{percentage}</Percentage>
                </Item>)}
            </StatList>
       </Conteiner>
    )

}
Statistics.propType = {
    title: PropTypes.string,
    stats: PropTypes.exact({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number
  })
}