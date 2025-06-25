import type { PropsWithChildren } from "react"

const CardTitle = ({ children }: PropsWithChildren) => (
    <div className="card-title">
        {children}
    </div>
)

export default CardTitle
