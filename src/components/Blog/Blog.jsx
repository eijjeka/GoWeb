import { image } from "./imgExports";
import s from "./Blog.module.scss";

export const Blog = () => {
  return (
    <section className={s.blog} id="blog">
      <picture>
        <source srcSet={`${image.blogJpg} 1x, ${image.blogJpg2x} 2x`} />
        <source srcSet={`${image.blogWebp} 1x, ${image.blogWebp2x} 2x`} />
        <img className={s.blog__img} src={image.blogJpg} alt="foto John Doe" />
      </picture>
      <div className={s.blog__meta}>
        <p className={s.blog__meta_subTitle}>April 16 2020</p>
        <h2 className={s.blog__meta_title}>Blog Post One</h2>
        <p className={s.blog__meta_text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <button className={s.blog__meta_button} type="button">
          Read Our Blog
        </button>
      </div>
    </section>
  );
};
