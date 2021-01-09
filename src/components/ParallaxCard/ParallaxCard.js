import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledParallaxCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;

    .panel-container {
        transform: perspective(400px) rotateX(0deg) rotateY(0deg);
        transform-style: preserve-3d;
        will-change: transform;
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .panel-content {
        transform: translateZ(80px) scale(0.8);
        transform-style: preserve-3d;
        overflow-wrap: break-word;
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    li {
        transform: translate3d(20px, -10px, 40px) scale(0.8);
        pointer-events: none;
    }

    img {
        transform: translate3d(0, 40px, 60px) scale(0.8);
        pointer-events: none;
    }
`;

const ImageWrapper = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ParallaxCard = (props) => {
    const panelRef = useRef();
    const subPanelRef = useRef();
    let mouseX, mouseY;
    let transformAmount = 5;

    useEffect(() => {
        panelRef.current.onmousemove = transformPanel;
        panelRef.current.onmouseenter = handleMouseEnter;
        panelRef.current.onmouseleave = handleMouseLeave;

        return () => {
            panelRef.current.onmousemove = null;
            panelRef.current.onmouseenter = null;
            panelRef.current.onmouseleave = null;
        };
    }, []);

    const transformPanel = (mouseEvent) => {
        mouseX = mouseEvent.layerX;
        mouseY = mouseEvent.layerY;

        const centerX = panelRef.current.offsetLeft + panelRef.current.clientWidth / 2;
        const centerY = panelRef.current.offsetTop + panelRef.current.clientHeight / 2;
        const percentX = (mouseX - centerX) / (panelRef.current.clientWidth / 2);
        const percentY = -((mouseY - centerY) / (panelRef.current.clientHeight / 2));

        subPanelRef.current.style.transform = 'perspective(400px) rotateY(' + percentX * transformAmount + 'deg) rotateX(' + percentY * transformAmount + 'deg)';
    };

    const handleMouseEnter = () => {
        setTimeout(() => {
            subPanelRef.current.style.transition = 'transform 0.1s';
        }, 100);
        subPanelRef.current.style.transition = 'transform 0.25s';
    };

    const handleMouseLeave = () => {
        subPanelRef.current.style.transition = 'transform 0.4s ease';

        subPanelRef.current.style.transform = 'perspective(400px) rotateY(0deg) rotateX(0deg)';
    };

    return (
        <StyledParallaxCard ref={panelRef}>
            <div className="panel-container" ref={subPanelRef}>
                <>
                    {props.image && (
                        <ImageWrapper src="https://images.unsplash.com/photo-1550587542-1668407b73d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                    )}
                    <div className="panel-content">{props.children}</div>
                </>
            </div>
        </StyledParallaxCard>
    );
};

ParallaxCard.propTypes = {};

export default ParallaxCard;
