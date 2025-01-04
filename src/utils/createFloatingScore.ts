import React from "react";


export const createFloatingScore = (event: React.MouseEvent) => {
    const floatingScore = document.createElement('div');
    floatingScore.id = 'floating-score';
    floatingScore.style.left = `${event.clientX}px`;
    floatingScore.style.top = `${event.clientY}px`;
    floatingScore.textContent = '+1';
    document.body.appendChild(floatingScore);
    setTimeout(() => {
        floatingScore.remove();
    }, 1000);
}