import React from 'react';
import {Button} from 'react-bootstrap';

const BoardWrite = () => {
  return (
    <div>
      <input className="title" type="text" placeholder="제목" />
      <br />
      <input className="content" type="text" placeholder="내용" />
      <br />
      <Button type="submit">작성</Button>
    </div>
  );
};

export default BoardWrite;
