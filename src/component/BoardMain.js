import React from "react";
import { Button } from "react-bootstrap";

const BoardMain = () => {
  return (
    <div>
      게시판
      <div>
        <input className="title" type="text" placeholder="제목" />
        <br />
        <input className="content" type="text" placeholder="내용" />
        <br />
        <Button>작성</Button>
      </div>
    </div>
  );
};

export default BoardMain;
