/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { fieldConfig } from '../utils/fieldConfig';

/**
 * Form component dynamically generates a form based on provided configurations.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.title - The title of the form.
 * @param {string} props.subtitle - The subtitle of the form.
 * @param {string} props.btnText - The text for the submit button. [required]
 * @param {function} props.onSubmitFunction - The function to call on form submission. [required]
 * @param {string} props.validationMessage - The validation message to display.
 * @param {string} props.errorMessage - The error message to display.
 * @param {Array<string>} props.fieldNames - The names of the fields to include in the form. [required]
 * @param {Object} props.fieldValue - The initial values for the fields.
 * @returns {JSX.Element} The JSX element for the form.
 */
const Form = ({
  title,
  subtitle,
  btnText,
  onSubmitFunction,
  validationMessage,
  errorMessage,
  fieldNames,
  fieldValue,
}) => {
  /**
   * Translates field names to their French equivalents when necessary.
   * @param {string} value - The field name to translate.
   * @returns {string} The translated field name.
   */
  const translation = (value) => {
    switch (value) {
      case 'name':
        return 'nom';
      case 'password':
        return 'mot de passe';
      case 'passwordConfirmation':
        return 'mot de passe identique';
      case 'country':
        return 'pays';
      case 'gender':
        return 'genre';
      default:
        return value;
    }
  };

  // Destructuring properties from the useForm hook
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  /**
   * Function to get the error class for a given field.
   * @param {string} field - Name of the field.
   * @returns {string} - Error class for the field.
   */
  const inputErrorClass = (field) => {
    return errors[field] ? ' input-error' : '';
  };

  /**
   * Effect to set initial values for fields if provided.
   * e.g. for update form
   */
  //TODO exemple with json file
  useEffect(() => {
    const fetchPost = async () => {
      try {
        fieldNames.forEach((fieldName) => {
          setValue(fieldName, fieldValue[fieldName]);
        });
      } catch (error) {
        console.log(error);
      }
    };
    // if props is set
    if (fieldValue) {
      fetchPost();
    }
  }, [fieldNames, fieldValue, setValue]);

  return (
    <form
      onSubmit={handleSubmit(() =>
        onSubmitFunction(...fieldNames.map((fieldName) => getValues(fieldName)))
      )}
      className='form'
      noValidate // validate by useForm hook
    >
      {/* Titles section */}
      <div className='form__section-title'>
        {title && <h2 className='title form__title'>{title}</h2>}
        {subtitle && <p className='subtitle form__subtitle'>{subtitle}</p>}
      </div>

      {/* form content (fields + validation message + submit button) */}
      <div className='form__content'>
        {fieldNames.map((fieldName, index) => {
          //get the field configuration from utils/fileConfig.jsx
          const field = fieldConfig[fieldName];
          // Determine the tag to use (input by default, if the information isn't set into fieldConfig)
          const Tag = field.tag || 'input';
          return (
            <div className='form__data' key={index}>
              <label htmlFor={fieldName} className='form__label'>
                {field.label}
              </label>
              {Tag === 'select' ? (
                <select
                  name={field.name}
                  id={fieldName}
                  className='form__select'
                >
                  {field.options.map((option, index) => {
                    return (
                      <option value={option.value} key={index}>
                        {option.label}
                      </option>
                    );
                  })}
                </select>
              ) : Tag === 'radio' ? (
                field.radios.map((radio, index) => {
                  return (
                    <>
                      <input
                        type='radio'
                        id={radio.name}
                        name={field.name}
                        value={radio.value}
                        key={index}
                      />
                      <label htmlFor={radio.name}>{radio.value}</label>
                    </>
                  );
                })
              ) : (
                <Tag
                  id={fieldName}
                  name={field.name}
                  type={field.type}
                  className={
                    `form__${field.tag || 'input'}` +
                    inputErrorClass(field.name) // into css : form__input / form__textarea, ...
                  }
                  {...register(field.name, {
                    required: field.isRequired,
                    pattern: field.pattern || null, // null by default, if the information isn't set into fieldConfig
                  })}
                />
              )}
              <p className='form__data--error'>
                {errors[field.name]?.type === 'required' && (
                  <>Veuillez entrer votre {translation(field.name)}</>
                )}
                {errors[field.name]?.type === 'pattern' && <>Champ invalide</>}
              </p>
            </div>
          );
        })}
        <p className='form__message--validation'>{validationMessage}</p>
        <p className='form__message--error'>{errorMessage}</p>
        <button type='submit' className='btn'>
          {btnText}
        </button>
      </div>
    </form>
  );
};
Form.propTypes = {
  onSubmitFunction: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  validationMessage: PropTypes.string,
  errorMessage: PropTypes.string,
  fieldNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  fieldValue: PropTypes.object,
};
export default Form;
