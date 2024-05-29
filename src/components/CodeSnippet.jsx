import PropTypes from 'prop-types';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { irBlack } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';

SyntaxHighlighter.registerLanguage('javascript', javascript);

const CodeSnippet = ({ codeString }) => {
  return (
    <SyntaxHighlighter
      language='javascript'
      style={irBlack}
      className={'code-snippet'}
    >
      {codeString}
    </SyntaxHighlighter>
  );
};
CodeSnippet.propTypes = {
  codeString: PropTypes.string.isRequired,
};
export default CodeSnippet;
