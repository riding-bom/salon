import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { combinedState } from "constant/type";
import { useEffect } from "react";
import { createSetMainPostActionAsync } from "redux/reducers/mainPost";
import { htmlToText } from "html-to-text";
import { Link } from "react-router-dom";

type carouselProps = {
  className?: string;
};

const Carousel = ({ className }: carouselProps) => {
  const mainPost = useSelector((state: combinedState) => state.mainPost);

  const dispatch = useDispatch();

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  useEffect(() => {
    dispatch(createSetMainPostActionAsync());
  }, []);

  return (
    <Slider {...settings} className={className}>
      {mainPost.map((post) => {
        return (
          <Link to={`/${post.id}`} key={post.id}>
            <div
              className="carousel-container"
              style={
                post.backgroundImage !== ""
                  ? {
                      backgroundImage: `linear-gradient( rgba(0, 0, 0, .5), rgba(0, 0, 0, .5) ), url("${post.backgroundImage}")`,
                    }
                  : { backgroundColor: post.backgroundColor }
              }
            >
              <h1>{post.title}</h1>
              <p>{htmlToText(post.content)}</p>
            </div>
          </Link>
        );
      })}
    </Slider>
  );
};

export default Carousel;
