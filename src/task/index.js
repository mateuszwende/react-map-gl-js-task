import React, { useReducer } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { Accordion, Button, Card, Container } from "react-bootstrap";
import MapComponent from "./components/MapComponent.js";
import TagTable from "./components/BookmarkTable.js";
import { tagReducer } from "./state";

const TagContext = React.createContext();

const Task = () => {
  const [tags, dispatchTags] = useReducer(tagReducer, []);

  const tagTableHeadData = ["ID", "Latitude", "Longitude"];

  return (
    <Container fluid style={{ paddingTop: "15px" }}>
      <TagContext.Provider value={{ tags, dispatchTags }}>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="0"
                style={{ width: "100%", textAlign: "left" }}
              >
                MAP
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <MapComponent
                  tags={tags}
                  dispatchTags={dispatchTags}
                  width="100%"
                  height="600px"
                />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="1"
                style={{ width: "100%", textAlign: "left" }}
              >
                TAGS TABLE
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <TagTable
                  tableHeadData={tagTableHeadData}
                  tags={tags}
                  dispatchTags={dispatchTags}
                />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </TagContext.Provider>
    </Container>
  );
};

export default Task;
