import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {InputForm} from "../components/InputForm";
import {RadioButton} from "../components/RadioButton";

let searchValue = "";
const handleChange = (value) => {
  console.log("----", value);
  searchValue = value;
}

const SearchForm = props => {
  const { handleSubmit, pristine, reset, submitting} = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <Field name="searchValue" component={InputForm} />
          {
            <div>
              <label>Filters</label>
              <div className="row radio-row">
                <div className="col s4">
                  <Field name="filters"
                    component={RadioButton}
                    type="radio"
                    value="channel"
                    labelValue="Channels"
                  />
                </div>
                <div className="col s4">
                  <Field name="filters"
                    component={RadioButton}
                    type="radio"
                    value="video"
                    labelValue="Videos"
                  />
                </div>
                <div className="col s4">
                  <Field name="filters"
                    component={RadioButton}
                    type="radio"
                    value="both"
                    labelValue="Videos And Channels"
                  />
                </div>
              </div>
            </div>
          }

        </div>
      </div>
      <div>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'search' // a unique identifier for this form
})(SearchForm)
