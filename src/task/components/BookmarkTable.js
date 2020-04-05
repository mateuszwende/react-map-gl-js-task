import React from "react";
import { Table, Button } from "reactstrap";
import PropTypes from "prop-types";
import { tagActions } from "../state";
import { TagType } from "task/types";

const TagTable = ({ tableHeadData, tags, dispatchTags }) => {
  const onTagRemove = (tagId) => {
    dispatchTags({ type: tagActions.REMOVE, payload: tagId });
  };

  return (
    <>
      {tags && tags.length > 0 ? (
        <Table>
          <thead>
            <tr>
              <th>#</th>
              {tableHeadData.map((name, key) => (
                <th key={key}>{name}</th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tags.map((tag, key) => (
              <tr key={key}>
                <th scope="row">{key + 1}</th>
                <td>{tag.id}</td>
                <td>{tag.latitude}</td>
                <td>{tag.longitude}</td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    color="danger"
                    size="sm"
                    style={{ margin: 0 }}
                    onClick={() => onTagRemove(tag.id)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>There is no tag on the map.</p>
      )}
    </>
  );
};

export default TagTable;

TagTable.propTypes = {
  tableHeadData: PropTypes.arrayOf(PropTypes.string),
  tags: PropTypes.arrayOf(TagType).isRequired,
  dispatchTags: PropTypes.func.isRequired,
};
