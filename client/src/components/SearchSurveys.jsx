import React from 'react'
import { Input } from 'semantic-ui-react'

const SearchSurveys = props => (
  <Input
    size='big'
    icon='search'
    placeholder='Search by Title...'
    fluid
    onChange={props.setSearchBar}
  />
)

export default SearchSurveys
