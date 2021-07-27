import axios from "axios";
import { Formik } from "formik";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "../css/singlePost.css";

//*** validation schema
const PostSchema = yup.object({
  title: yup.string().required("This field is required"),
  body: yup.string().required("This field is required"),
});

const SinglePost = () => {
  const history = useHistory();
  const params = useParams();

  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  //* fetch post with id
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => {
        setPostTitle(res.data.title);
        setPostBody(res.data.body);
      });
  }, [params.id]);

  //* set initialValues
  const initialValues = {
    title: postTitle,
    body: postBody,
  };

  //* form submission
  const submitForm = async (values) => {
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {
        title: values.title,
        body: values.password,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("post updated successfully");
          history.push("/");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={PostSchema}
      onSubmit={submitForm}
    >
      {(formik) => {
        const { errors } = formik;
        return (
          <div className="singlePostPage">
            <form className="singlePostForm" onSubmit={formik.handleSubmit}>
              <div className="postInput">
                <label htmlFor="title"> title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                />
                {errors.title && <div className="error">{errors.title}</div>}
              </div>

              <div className="postInput">
                <label htmlFor="body"> body</label>
                <textarea
                  name="body"
                  id="body"
                  cols="30"
                  rows="10"
                  onChange={formik.handleChange}
                  value={formik.values.body}
                ></textarea>
                {errors.body && <div className="error">{errors.body}</div>}
              </div>

              <div className="formButtons">
                <button
                  className="cancel"
                  type="button"
                  onClick={() => history.push("/")}
                >
                  CANCEL
                </button>
                <button className="save" type="submit">
                  SAVE
                </button>
              </div>
            </form>
          </div>
        );
      }}
    </Formik>
  );
};

export default SinglePost;
