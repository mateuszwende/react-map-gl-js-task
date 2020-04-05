import { tagActions, tagReducer } from "./index";
import { v4 as uuidv4 } from "uuid";

const mockPayload = {
  id: uuidv4(),
  latitude: 35.45,
  longitude: 45.334,
};

test("Tag reducer should return the initial state", () => {
  expect(tagReducer(undefined, [])).toEqual([]);
});

test("Tag reducer should handle ADD", () => {
  const addAction = {
    type: tagActions.ADD,
    payload: mockPayload,
  };

  expect(tagReducer([], addAction)).toEqual([mockPayload]);
});

test("Tag reducer should handle UPDATE", () => {
  const mockUpdatePayload = {
    id: mockPayload.id,
    latitude: 55.45,
    longitude: 66.334,
  };
  const updateAction = {
    type: tagActions.UPDATE,
    payload: mockUpdatePayload,
  };

  expect(tagReducer([mockPayload], updateAction)).toEqual([mockUpdatePayload]);
});

test("Tag reducer should handle REMOVE", () => {
  const removeAction = {
    type: tagActions.REMOVE,
    payload: mockPayload.id,
  };

  expect(tagReducer([mockPayload], removeAction)).toEqual([]);
});
