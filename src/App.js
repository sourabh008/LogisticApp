import { React, useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "rc-field-form";

import Button from "./components/Button";
import Modal from "./components/Model/Modal";
import { fetchPosts, addPost, deletePost, updatePost } from "./redux/action";
import DisplayPost from "./components/Display";

import "./app.scss";

const App = () => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [updatePostId,setUpdatePostId]=useState('')
  const [form] = Form.useForm();

   const posts = useSelector((state) => state.get('posts'));
   const error = useSelector((state) => state.get('error'));
   const loading = useSelector((state) => state.get('loading'));

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const toggleModal = useCallback(() => {
    setModalOpen((prevState) => !prevState);
    form.resetFields();
    setIsUpdate(false);
  }, [form]);

  const getFormValue = useCallback(
    (values) => {
      dispatch(addPost(values));
      setModalOpen(false);
      form.resetFields();
    },
    [dispatch, form]
  );
  
  const postDelete = useCallback(
    (id) => () => {
      dispatch(deletePost(id));
    },
    [dispatch]
  );

  const postUpdate = useCallback(
    (post) => () => {
      setModalOpen((prevState) => !prevState);
      setIsUpdate((prevState) => !prevState);
      setUpdatePostId(post.id);
      form.setFieldsValue(post);
    },
    [form]
  );

  const getUpdatedFormValue = useCallback((values) => {
    dispatch(updatePost({...values,id:updatePostId}))
    setModalOpen((prevState) => !prevState);
    setIsUpdate((prevState) => !prevState);

  }, [dispatch, updatePostId]);

  return (
    <div className="mainDiv">
      <Button
        color="primary"
        text="Add New Post"
        oncilck={toggleModal}
        className="create_post_button"
      />

      <Modal
        modalState={modalOpen}
        closeModal={toggleModal}
        getFormValue={isUpdate ? getUpdatedFormValue : getFormValue}
        form={form}
        isUpdate={isUpdate}
      />
      {loading ? (
        <p>Loading......</p>
      ) : (
        <DisplayPost
          data={posts}
          postUpdate={postUpdate}
          postDelete={postDelete}
        />
      )}
      {error && <p>Something went wrong</p>}
    </div>
  );
};

export default App;
