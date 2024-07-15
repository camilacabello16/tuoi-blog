'use client';

import { useState } from "react";

export default function Blog() {
    const [variable, setVariable] = useState<any>(0);

    return (
        <div>Blog page {variable}</div>
    );
}