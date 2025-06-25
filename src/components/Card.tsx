import type { PropsWithChildren } from "react"

const Card = ({ children }: PropsWithChildren) => (
    <div className="card">
        {children}
    </div>
)

export default Card
