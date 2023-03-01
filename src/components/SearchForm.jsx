import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import { FormWrapper } from '../styles';

function SearchForm({
  searchTerm,
  handleInputChange,
  handleFormSubmit,
}) {
  return (
    <FormWrapper inline onSubmit={handleFormSubmit}>
      <FormGroup>
        <Label for="searchTerm" hidden>
          Search by Location:
        </Label>
        <Input
          type="text"
          name="searchTerm"
          id="searchTerm"
          placeholder="Mount Rushmore OR 10014 OR Denver, CO"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </FormGroup>
      <Button>Search</Button>
    </FormWrapper>
  );
}

SearchForm.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
