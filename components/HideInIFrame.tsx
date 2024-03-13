'use client';
import React, { useEffect, useState } from 'react';

const HideInIFrame = ({ children }: { children: React.ReactNode }) => {
    const [isInIframe, setIsInIframe] = useState(false);

    useEffect(() => {
        const inIframe = window !== window.top;
        setIsInIframe(inIframe);
    }, []);

    return isInIframe ? null : <div>{children}</div>;
};

export default HideInIFrame;
