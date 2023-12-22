import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  triggerDecrementRequest,
  triggerIncrementRequest,
} from "./redux/actions/countAction";
import { fetchPostsRequest } from "./redux/actions/postAction";

const Posts = ({ arr = [] }) => {
  if (!arr?.length) return <></>;
  return (
    <div>
      {arr?.map((i) => {
        return (
          <div
            id={"posts"}
            key={i?.id}
            style={{
              backgroundColor: "lightgrey",
              borderRadius: 12,
              padding: 16,
              margin: 16,
            }}
          >
            <h2 id={i?.id}>{i?.title}</h2>
            <h4>{i?.body}</h4>
          </div>
        );
      })}
    </div>
  );
};

const App = () => {
  const dispatch = useDispatch();
  const makeApiCall = async () => {
    try {
      dispatch(fetchPostsRequest());
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    makeApiCall();
  }, []);
  const countFromRedux = useSelector((state) => state.count);
  const postsFromRedux = useSelector((state) => state.post.data);

  const arr = postsFromRedux?.filter((item, index) => index < 5);
  console.log(JSON.stringify(arr));

  const { number, loading } = countFromRedux;

  const handleIncrement = () => {
    dispatch(triggerIncrementRequest());
  };

  const handleDecrement = () => {
    dispatch(triggerDecrementRequest());
  };

  return (
    <div style={styles.container} className="App">
      <div>
        <button style={styles.btn} onClick={handleIncrement}>
          +
        </button>
        {loading ? <h1> -</h1> : <h1 style={styles.m48}>{number}</h1>}
        <button style={styles.btn} onClick={handleDecrement}>
          -
        </button>
      </div>
      <Posts arr={arr} />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  btn: { width: 48, height: 48, borderRadius: 24 },
  m48: { margin: 48 },
};

export default App;
export { Posts };
