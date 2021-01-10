import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledParallaxCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    touch-action: none;

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
        @media screen and (min-width: 1024px) {
            transform: translate3d(20px, -10px, 40px) scale(0.8);
        }
        pointer-events: none;
    }

    img {
        @media screen and (min-width: 1024px) {
            transform: translate3d(0, 40px, 60px) scale(0.8);
        }
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
        panelRef.current.addEventListener('mousemove', transformPanel, { passive: true });
        panelRef.current.addEventListener('mouseenter', handleStart, { passive: true });
        panelRef.current.addEventListener('mouseleave', handleEnd, { passive: true });

        panelRef.current.addEventListener('touchmove', transformPanel, { passive: true });
        panelRef.current.addEventListener('touchstart', handleStart, { passive: true });
        panelRef.current.addEventListener('touchend', handleEnd, { passive: true });

        return () => {
            panelRef.current.removeEventListener('mouseenter');
            panelRef.current.removeEventListener('mousemove');
            panelRef.current.removeEventListener('mouseleave');

            panelRef.current.removeEventListener('touchstart');
            panelRef.current.removeEventListener('touchmove');
            panelRef.current.removeEventListener('touchend');
        };
    }, []);

    /**
     * Set the transformation during movement
     * @param {*} inputEvent
     */
    const transformPanel = (inputEvent) => {
        mouseX = inputEvent?.layerX || inputEvent?.touches?.[0]?.clientX || null;
        mouseY = inputEvent?.layerY || inputEvent?.touches?.[0]?.clientY || null;

        const centerX = panelRef.current.offsetLeft + panelRef.current.clientWidth / 2;
        const centerY = panelRef.current.offsetTop + panelRef.current.clientHeight / 2;
        const percentX = (mouseX - centerX) / (panelRef.current.clientWidth / 2);
        const percentY = -((mouseY - centerY) / (panelRef.current.clientHeight / 2));

        subPanelRef.current.style.transform = 'perspective(400px) rotateY(' + percentX * transformAmount + 'deg) rotateX(' + percentY * transformAmount + 'deg)';
    };

    /**
     * Set the starting transformation
     */
    const handleStart = () => {
        setTimeout(() => {
            subPanelRef.current.style.transition = 'transform 0.1s';
        }, 100);
        subPanelRef.current.style.transition = 'transform 0.25s';
    };

    /**
     * Set the ending transformation
     */
    const handleEnd = () => {
        subPanelRef.current.style.transition = 'transform 0.4s ease';

        subPanelRef.current.style.transform = 'perspective(400px) rotateY(0deg) rotateX(0deg)';
    };

    return (
        <StyledParallaxCard ref={panelRef}>
            <div className="panel-container" ref={subPanelRef}>
                <>
                    {props.image && <ImageWrapper src={props.image} />}
                    <div className="panel-content">{props.children}</div>
                </>
            </div>
        </StyledParallaxCard>
    );
};

ParallaxCard.propTypes = {};

export default ParallaxCard;
