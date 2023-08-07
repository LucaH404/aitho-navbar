import { Table, Button } from "antd";
import Column from "antd/es/table/Column";
import React from "react";
import { Comment } from "../../models/commentType";

interface CustomTableProps {
  comments: Comment[];
  handleInc: (limit: number) => void;
  count: number;
  show: boolean;
  limit: number;
}

const CustomTable: React.FC<CustomTableProps> = ({
  comments,
  handleInc,
  count,
  show,
  limit,
}) => {
  return (
    <>
      <Table dataSource={comments} pagination={false}>
        <Column title="PostID" dataIndex="id" key="id" />
        <Column
          title="User"
          dataIndex="user"
          key="user"
          render={(Item) => Object.values(Item.username)}
        />
        <Column title="Comment" dataIndex="body" key="body" />
      </Table>
      <div className="show">
        <p className="m-3" id="counter">
          Lettura blocco {count}
        </p>
        <Button
          type="primary"
          className="show"
          size="large"
          disabled={show}
          onClick={() => handleInc(limit)}
        >
          Leggi il prossimo blocco: {count + 1}
        </Button>
      </div>
    </>
  );
};

export default CustomTable;
