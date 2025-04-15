import React from "react";

export default function ProductDetails({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
            <h2>Features products</h2>
        </>
    )
}
