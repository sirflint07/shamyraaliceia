'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    content: "This product has completely transformed how we handle our daily operations. The interface is intuitive and the customer support is outstanding.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    content: "I'm impressed with the attention to detail and the performance optimization. It's rare to find a solution that's both powerful and easy to use.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    content: "The analytics features have given us invaluable insights into our business. We've seen a 40% increase in efficiency since implementing this solution.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "David Lee",
    role: "Creative Director",
    content: "Absolutely love the design and flexibility. It's been a game changer for our creative workflows.",
    rating: 5,
    image: "/img/",
  },
  {
    name: "Olivia Brown",
    role: "CEO, Bloom Co.",
    content: "Fantastic experience from start to finish. Highly recommended for any business looking to level up.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  }
];

export default function ReviewSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const ReviewCard = ({ name, role, content, rating, image }) => (
    <div className="bg-white shadow-md rounded-xl p-6 mx-4 h-full flex flex-col justify-between">
      <div className="flex items-center gap-4 mb-4">
        <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover" />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 text-sm mb-4">{content}</p>
      <div className="text-yellow-400">
        {'★'.repeat(rating)}
        {'☆'.repeat(5 - rating)}
      </div>
    </div>
  );

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about their experience working with us.
          </p>
        </div>

        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index}>
              <ReviewCard {...review} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
