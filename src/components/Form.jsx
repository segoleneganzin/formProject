/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import FormFieldManager from './FormFieldManager';

const Form = ({
  title,
  subtitle,
  btnText,
  onSubmitFunction,
  validationMessage,
  errorMessage,
  fieldNames,
  fieldValue,
  origin,
}) => {
  const translation = (value) => {
    switch (value) {
      case 'name':
        return 'nom';
      case 'password':
        return 'mot de passe';
      case 'passwordConfirmation':
        return 'mot de passe identique';
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

  // Error messages for input validation
  const inputErrorMessage = (field) => {
    return errors[field] ? `Veuillez entrer votre ${translation(field)}` : '';
  };

  //**********************************place data to input value if necessary
  useEffect(() => {
    const fetchPost = async () => {
      if (fieldValue) {
        try {
          fieldNames.forEach((fieldName) => {
            setValue(fieldName, fieldValue[fieldName]);
          });
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchPost();
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
          return (
            <FormFieldManager
              key={index}
              fieldName={fieldName}
              inputErrorClass={inputErrorClass}
              register={register}
              errors={errors}
              inputErrorMessage={inputErrorMessage}
            />
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
  fieldNames: PropTypes.arrayOf(PropTypes.string),
  fieldValue: PropTypes.object,
  origin: PropTypes.string,
};
export default Form;
