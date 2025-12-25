import { useEffect, useRef, useState } from 'react';
import './CommentScroll.css';

const CommentScroll = ({ speed = 120, direction = 'left', pauseOnHover = true, className, style }) => {
const comments = [
  { user: "Alice", text: "This site is amazing! 😍", avatar: "https://randomuser.me/api/portraits/women/21.jpg" },
  { user: "Bob", text: "Fast delivery 🚀", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
  { user: "Chloe", text: "Customer service is excellent 👍", avatar: "https://randomuser.me/api/portraits/women/45.jpg" },
  { user: "David", text: "Love the new projects section 🔥", avatar: "https://randomuser.me/api/portraits/men/56.jpg" },
  { user: "Emma", text: "The design is so cool 🎨", avatar: "https://randomuser.me/api/portraits/women/67.jpg" },
  { user: "Mia", text: "Highly recommend to friends 😉", avatar: "https://randomuser.me/api/portraits/women/78.jpg" },
  { user: "Omar", text: "Content is clear and well organized 💡", avatar: "https://randomuser.me/api/portraits/men/81.jpg" },
  { user: "Liam", text: "Really professional 👌", avatar: "https://randomuser.me/api/portraits/men/92.jpg" },
  { user: "Ali", text: "Very easy to use 🖱️", avatar: "https://randomuser.me/api/portraits/men/15.jpg" },
  { user: "Nadia", text: "Love the comment scroll 😄", avatar: "https://randomuser.me/api/portraits/women/88.jpg" }
];


  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const lastTimestampRef = useRef(null);
  const offsetRef = useRef(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const animate = (timestamp) => {
      if (!lastTimestampRef.current) lastTimestampRef.current = timestamp;
      const deltaTime = (timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      if (!trackRef.current) return;

      const dirMultiplier = direction === 'left' ? 1 : -1;
      const currentSpeed = pauseOnHover && isHovered ? 0 : speed * dirMultiplier;

      offsetRef.current += currentSpeed * deltaTime;

      const trackWidth = trackRef.current.scrollWidth;
      if (trackWidth > 0) {
        offsetRef.current = offsetRef.current % trackWidth;
        trackRef.current.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTimestampRef.current = null;
    };
  }, [speed, direction, isHovered, pauseOnHover]);

  const handleMouseEnter = () => pauseOnHover && setIsHovered(true);
  const handleMouseLeave = () => pauseOnHover && setIsHovered(false);

  return (
    <div
      ref={containerRef}
      className={`comment-scroll ${className ?? ''}`}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="comment-scroll__track" ref={trackRef}>
        {comments.map((comment, index) => (
          <div className="comment-scroll__item" key={index}>
            <img src={comment.avatar} alt={comment.user} className="comment-scroll__avatar" />
            <div className="comment-scroll__content">
              <span className="comment-scroll__user">{comment.user}:</span>
              <span className="comment-scroll__text">{comment.text}</span>
            </div>
          </div>
        ))}
        {comments.map((comment, index) => (
          <div className="comment-scroll__item" key={`copy-${index}`}>
            <img src={comment.avatar} alt={comment.user} className="comment-scroll__avatar" />
            <div className="comment-scroll__content">
              <span className="comment-scroll__user">{comment.user}:</span>
              <span className="comment-scroll__text">{comment.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentScroll;
