import PropTypes from 'prop-types';
import { Input, Label } from './Filter.styled';

export const Filter = ({ onFilterHandle }) => {
  return (
    <>
      <Label>
        Find contacts by name
        <Input type="text" name="filter" onChange={onFilterHandle} />
      </Label>
    </>
  );
};

Filter.propTypes = {
  onFilterHandle: PropTypes.func.isRequired,
};
