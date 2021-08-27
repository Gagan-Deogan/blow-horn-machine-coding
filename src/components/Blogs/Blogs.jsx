import React from "react";
import { Blog } from "./Blog";
import { SmBlog } from "./SmBlog";
import { SwiperCustome } from "../SwiperCustom/SwiperCustom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { smBlogs, blogs, breakpoints } from "../../utils";
SwiperCore.use([Pagination, Navigation]);

export const Blogs = () => {
  return (
    <section className="relative" id="blogs">
      <h2 className="font-extrabold">The Project Blog</h2>
      <p className="mt-4">Designs and layouts to help you with your app.</p>
      <SwiperCustome>
        {blogs.map(({ imageSrc, title, paragraph, badge, bgColor }, index) => (
          <SwiperSlide key={title}>
            <Blog
              imageSrc={imageSrc}
              title={title}
              paragraph={paragraph}
              badge={badge}
              bgColor={bgColor}
            />
          </SwiperSlide>
        ))}
      </SwiperCustome>

      <SwiperCustome>
        {smBlogs.map(({ imageSrc, title, paragraph, badge, bgColor }) => (
          <SwiperSlide key={title}>
            <SmBlog
              imageSrc={imageSrc}
              title={title}
              paragraph={paragraph}
              badge={badge}
              bgColor={bgColor}
            />
          </SwiperSlide>
        ))}
      </SwiperCustome>
    </section>
  );
};
