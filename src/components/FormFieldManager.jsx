import PropTypes from 'prop-types';
import { fieldConfig } from '../utils/fieldConfig';

const FormFieldManager = ({
  fieldName,
  inputErrorClass,
  register,
  errors,
  inputErrorMessage,
}) => {
  const field = fieldConfig[fieldName];
  if (!field) return null;

  // Determine the tag to use (input by default)
  const Tag = field.tag || 'input';

  return (
    <div className='form__data'>
      <label htmlFor={fieldName} className='form__label'>
        {field.label}
      </label>
      <Tag
        id={fieldName}
        name={fieldName}
        type={field.type}
        className={`form__${field.tag || 'input'}` + inputErrorClass(fieldName)}
        {...register(fieldName, {
          required: field.isRequired || true, // true by default
          pattern: field.pattern || null,
        })}
      />
      {errors[fieldName]?.type === 'required' && (
        <p className='error'>{inputErrorMessage(fieldName)}</p>
      )}
      {errors[fieldName]?.type === 'pattern' && (
        <p className='error'> Champ invalide</p>
      )}
    </div>
  );
};
FormFieldManager.propTypes = {
  fieldName: PropTypes.string,
  inputErrorClass: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  inputErrorMessage: PropTypes.func.isRequired,
  confirmation: PropTypes.bool,
};

export default FormFieldManager;
