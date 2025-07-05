import type { ComponentProps, PropsWithChildren } from "react";
import { Link, useNavigate } from '@tanstack/react-router';

interface CardProps {
    to?: ComponentProps<typeof Link>['to'];
}

const Card = ({ to, children }: PropsWithChildren<CardProps>) => {
    const navigate = useNavigate()

    if (to) {
        return (
            <div className="card" onClick={() => navigate({ to })}>
                {children}
            </div>
        );
    }

    return (
        <div className="card">
            {children}
        </div>
    );
};

export default Card;
