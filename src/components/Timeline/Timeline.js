import React from 'react';
import styled from 'styled-components';

const StyledTimeline = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 0;
    margin: 40px 0;

    li {
        display: flex;
        flex-direction: column;
        list-style-type: none;
        margin-bottom: 20px;
        justify-content: center;

        @media screen and (min-width: 640px) {
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
        }
    }

    .date {
        background: #3dff8d;
        border-radius: 20px;
        margin: 20px 0 10px;
        padding: 15px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;

        @media screen and (min-width: 640px) {
            margin: 0 20px 0 0;
        }
    }
`;

const Item = styled.li`
    .date {
        background-color: rgba(61, 255, 141, ${(props) => 1 / (props.index + 1)});

        @media screen and (min-width: 640px) {
            padding-right: ${(props) => 100 / (props.index + 1)}px;
        }
    }
`;

const Headline = styled.span`
    display: block;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.3;
    color: #130037;
    text-align: center;

    @media screen and (min-width: 640px) {
        text-align: left;
        max-width: 250px;
    }
`;

const Subline = styled.span`
    display: block;
    color: #130037;
    text-align: center;

    @media screen and (min-width: 640px) {
        text-align: left;
        max-width: 250px;
    }
`;

const items = [
    {
        startDate: '02/2020',
        endDate: 'heute',
        title: (
            <Headline>
                Senior Software-Developer /<br />
                Leitung Development
            </Headline>
        ),
    },
    {
        startDate: '02/2019',
        endDate: '02/2020',
        title: <Subline>Senior Frontend-Developer</Subline>,
    },
    {
        startDate: '01/2017',
        endDate: '02/2019',
        title: <Subline>Professional Frontend-Developer</Subline>,
    },
    {
        startDate: '11/2014',
        endDate: '01/2017',
        title: <Subline>Junior Frontend-Developer</Subline>,
    },
];

class Timeline extends React.Component {
    render() {
        return (
            <StyledTimeline>
                {items.map((item, index) => {
                    return (
                        <Item key={index} index={index}>
                            <span className="date">
                                {item.startDate} – {item.endDate}
                            </span>
                            {item.title}
                        </Item>
                    );
                })}
            </StyledTimeline>
        );
    }
}

export default Timeline;
