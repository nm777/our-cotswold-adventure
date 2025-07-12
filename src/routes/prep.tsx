import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react';

export const Route = createFileRoute('/prep')({
    component: RouteComponent,
})

const posts = [
    {
        id: 'getting-started',
        title: 'Getting Started',
        body: 'The first step in our journey was to decide on a destination. We both wanted to visit the English countryside, and the Cotswolds seemed like the perfect choice. We started by researching the best time to visit, what to pack, and how to get around.',
        photos: ['/public/images/background-1024x768.jpg'],
    },
    {
        id: 'booking-flights',
        title: 'Booking Flights',
        body: 'Once we had a rough itinerary, it was time to book our flights. We used a variety of travel websites to compare prices and find the best deals. We ended up flying into London Heathrow and taking a train to the Cotswolds.',
        photos: ['/public/images/background-2048x1536.jpg'],
    },
    {
        id: 'finding-accommodation',
        title: 'Finding Accommodation',
        body: 'We wanted to stay in a traditional Cotswold cottage, so we started our search on Airbnb and VRBO. We found a charming cottage in the village of Bourton-on-the-Water that was perfect for our needs.',
        photos: ['/public/images/background-3000x2250.jpg'],
    },
    {
        id: 'planning-activities',
        title: 'Planning Activities',
        body: 'With our flights and accommodation sorted, it was time to plan our activities. We knew we wanted to do a lot of hiking and exploring, so we bought a detailed map of the Cotswolds. We also booked a few tours, including a visit to a local brewery and a ghost tour of a haunted village.',
        photos: ['/public/images/background-400x300.jpg'],
    },
    {
        id: 'packing',
        title: 'Packing',
        body: 'Packing for a trip to the Cotswolds can be tricky, as the weather can be unpredictable. We made sure to pack layers of clothing, including waterproof jackets and comfortable walking shoes. We also packed our cameras, of course!',
        photos: ['/public/images/background-640x480.jpg'],
    },
];

function RouteComponent() {
    const [visiblePosts, setVisiblePosts] = useState([posts[0]]);
    const observer = useRef<IntersectionObserver | null>(null);

    const postRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        observer.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('hidden');
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        const currentObserver = observer.current;

        postRefs.current.forEach((postRef) => {
            if (postRef) {
                currentObserver.observe(postRef);
            }
        });

        return () => {
            if (currentObserver) {
                currentObserver.disconnect();
            }
        };
    }, [visiblePosts]);

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.offsetHeight - 100
            ) {
                if (visiblePosts.length < posts.length) {
                    setVisiblePosts((prevPosts) => [
                        ...prevPosts,
                        posts[prevPosts.length],
                    ]);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [visiblePosts]);

    const scrollToPost = (id: string) => {
        const postElement = document.getElementById(id);
        if (postElement) {
            postElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="prep-container">
            <h1>Preparation</h1>
            <nav className="prep-nav">
                {posts.map((post) => (
                    <a
                        key={post.id}
                        href={`#${post.id}`}
                        className="prep-nav-item"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToPost(post.id);
                        }}
                    >
                        {post.title}
                    </a>
                ))}
            </nav>
            <div>
                {visiblePosts.map((post, index) => (
                    <div
                        key={post.id}
                        id={post.id}
                        ref={(el) => (postRefs.current[index] = el)}
                        className="prep-post hidden"
                    >
                        <h2 className="prep-post-title">{post.title}</h2>
                        <p className="prep-post-body">{post.body}</p>
                        {post.photos.map((photo) => (
                            <img
                                key={photo}
                                src={photo}
                                alt={post.title}
                                className="prep-post-image"
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}