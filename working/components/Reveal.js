'use client'
import React from "react";

export default function Reveal({children}) {
    const [
        isFirstSnippetShown,
        setIsFirstSnippetShown,
    ] = React.useState(false);

    return <>
        {isFirstSnippetShown ?
            children
            :
            <div className="reveal">
                <button
                    onClick={() =>
                        setIsFirstSnippetShown(true)}
                >
                    Reveal Content
                </button>
            </div>
        }

    </>;
}