import { useState } from "react";
import styles from "./index.module.scss";
import { MdOutlineDateRange } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { endpoints, getAllData } from "../../Services/httpClientServer";

const BlogCard = () => {
  const [blogs, setBlogs] = useState([]);
  const [firstThreeBlog, setFirstThreeBlog] = useState([]);

  useEffect(() => {
    getAllData(endpoints.blogs).then((res) => {
      setBlogs(res.data);

      const threeBlogs = res.data.slice(0, 3);
      setFirstThreeBlog(threeBlogs);
    });
  }, []);

  console.log(blogs);

  return (
    <section className={styles["blog"]}>
      <div className="container">
        <div className={styles["blog-card-inner"]}>
          <div className={styles["title"]}>
            <h1>Latest News Update From Blog</h1>
          </div>
          <div className={styles["cards"]}>
            {firstThreeBlog.map((b) => {
              return (
                <div className={styles["card"]}>
                  <div className={styles["card-img"]}>
                    <img src={b.image} alt="blog image not found" />
                  </div>

                  <div className={styles["card-text"]}>
                    <p>
                      <MdOutlineDateRange />
                      {b.createDate}
                    </p>

                    <h3>
                      <NavLink>{b.title}</NavLink>
                    </h3>

                    <p>
                      {b.text.length > 100
                        ? `${b.text.slice(0, 100)}...`
                        : b.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
