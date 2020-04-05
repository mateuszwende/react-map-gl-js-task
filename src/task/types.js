import PropTypes from "prop-types";

export const TagType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
});
