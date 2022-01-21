import React from "react";

export default function ImageBorder({ children }) {
    return <div className="mx-auto text-center"><div className="shadow inline-block mx-auto p-3">{children}</div></div>
}