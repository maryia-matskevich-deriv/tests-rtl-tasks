import React from "react";
import "./App.css";

const userInfoFields = {
  field_title: {
    fieldName: "Title",
    type: "select",
    extra: {
      options: [
        {
          value: 0,
          label: "None"
        },
        {
          value: 1,
          label: "Mr."
        },
        {
          value: 2,
          label: "Ms."
        },
        {
          value: 3,
          label: "Mrs."
        },
        {
          value: 4,
          label: "Other"
        }
      ]
    }
  },
  field_firstName: {
    fieldName: "First Name",
    type: "text"
  },
  field_lastName: {
    fieldName: "Last Name",
    type: "text"
  },
  field_email: {
    fieldName: "Email",
    type: "text"
  },
  field_phone: {
    fieldName: "Phone",
    type: "text"
  },
  field_username: {
    fieldName: "Username",
    type: "text"
  },
  field_password: {
    fieldName: "Password",
    type: "text"
  }
};

const SubmitButton = (props) => {
  const { buttonText = "Submit" } = props;

  return <input className="SubmitButton" type="submit" value={buttonText} />;
};

const InputRenderer = (props) => {
  const { field = {}, fieldKey = "" } = props;
  const {
    fieldName = "",
    customClass = "",
    type = "text",
    placeholder = "",
    pattern = "",
    isReadOnly = false,
    isDisabled = false,
    isRequired = false,
    extra = {},
    onChange = () => {},
    onBlur = () => {},
    onFocus = () => {}
  } = field;

  let inputDom = (
    <input
      type={type}
      placeholder={placeholder}
      name={fieldKey}
      id={fieldKey}
      className={`${fieldKey} ${customClass}`}
      pattern={pattern}
      readOnly={isReadOnly}
      disabled={isDisabled}
      required={isRequired}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );

  switch (type) {
    case "select":
      inputDom = (
        <select
          name={fieldKey}
          id={fieldKey}
          className={`${fieldKey} ${customClass}`}
          disabled={isDisabled}
          required={isRequired}
          multiple={extra.multiple}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        >
          <option>-- Select an option --</option>
          {(extra.options || []).map((option, idx) => {
            return (
              <option key={idx} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      );
    default:
      break;
  }

  return (
    <div>
      <label>{fieldName || fieldKey}</label>
      {inputDom}
    </div>
  );
};

const UserInfoInputs = (props) => {
  const { fields = {} } = props;

  return (
    <div className="UserInfoInputs">
      {Object.keys(fields).map((fieldKey, idx) => {
        return <InputRenderer field={fields[fieldKey]} fieldKey={fieldKey} />;
      })}
    </div>
  );
};

const UserInfoForm = (props) => {
  const { fields } = props;
  return (
    <form className="UserInfoForm" onSubmit={() => alert("Form Submitted")}>
      <UserInfoInputs fields={fields} />
      <SubmitButton />
    </form>
  );
};

const App = (props) => {
  return <UserInfoForm fields={userInfoFields} />;
};

export default App;
