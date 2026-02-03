"use client"

export function GridLines() {
    return (
        <div className="fixed inset-0 flex justify-between pointer-events-none px-6 md:px-20 lg:px-40 z-0">
            <div className="w-[1px] h-full bg-black/[0.03]"></div>
            <div className="w-[1px] h-full bg-black/[0.03]"></div>
            <div className="w-[1px] h-full bg-black/[0.03]"></div>
            <div className="w-[1px] h-full bg-black/[0.03]"></div>
        </div>
    )
}
