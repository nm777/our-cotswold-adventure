import type { ComponentProps, PropsWithChildren } from "react";
import { Link } from '@tanstack/react-router';

interface CardProps {
    to?: ComponentProps<typeof Link>['to'];
}

const Card = ({ to, children }: PropsWithChildren<CardProps>) => {
    if (to) {
        return (
            <Link to={to}>
                <div className="card">
                    {children}
                </div>
            </Link>
        );
    }

    return (
        <div className="card">
            {children}
        </div>
    );
};

export default Card;
