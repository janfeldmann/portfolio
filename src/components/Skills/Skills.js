import React from 'react';
import styled from 'styled-components';
import 'devicons/css/devicons.scss';
import 'devicon/devicon.min.css';

const StyledSkills = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    margin: auto 0 0;

    li {
        transition: color 200ms ease, transform 200ms ease;
        font-size: 0.75rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-right: 25px;
        margin-bottom: 10px;

        &:last-child {
            margin-right: 0;
        }

        i {
            transition: background-color 200ms ease;
            display: block;
            margin-bottom: 5px;
            border-radius: 50%;
            padding: 10px 0 5px;

            &:before {
                font-size: 3rem;
            }
        }

        img {
            display: block;
            margin-bottom: 5px;
            width: 3rem;
            padding: 10px 0 5px;
            transform: none;
        }
    }
`;

class Skills extends React.Component {
    render() {
        return (
            <StyledSkills>
                {this?.props?.items.map((item, index) => {
                    console.log(item.image);
                    return (
                        <li key={index}>
                            {item.image ? <img src={item.image} alt={item.title} /> : <i className={item.class ? item.class : `devicons devicons-${item.icon}`} />}
                            {item.title}
                        </li>
                    );
                })}
            </StyledSkills>
        );
    }
}

export default Skills;
